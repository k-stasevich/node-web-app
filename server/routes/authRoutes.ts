import { jwtService } from './../services/jwtService/jwtService';
import * as express from 'express';

import { userService } from '../services/userService';

const router = express.Router();

router.post('/login', async (req: express.Request, res: express.Response) => {
  try {
    const { username, password: plainTextPassword } = req.body;

    const user = await userService.getUserByCreds(username, plainTextPassword);

    if (!user) {
      return res.status(401).send({ message: 'Incorrect username or password' });
    }

    const accessToken = jwtService.generateAccessToken(String(user.id));
    const refreshToken = jwtService.generateRefreshToken(String(user.id));

    res.send({ userId: user.id, accessToken, refreshToken });
  } catch (err) {
    console.error(`${module.filename}, POST '/login' error`);
    console.error(err);
    res.status(500).send({ message: 'SERVER_ERROR', err });
  }
});

router.put('/login/refresh', (req: express.Request, res: express.Response) => {
  const { refreshToken } = req.body;

  res.send({ accessToken: '123', refreshToken: '456' });
});

export const authRoutes = router;
