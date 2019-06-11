import express = require('express');

const router = express.Router();

router.get('/login', (req: express.Request, res: express.Response) => {
  res.send({ authToken: '123', refreshToken: '456' });
});

export const authRoutes = router;
