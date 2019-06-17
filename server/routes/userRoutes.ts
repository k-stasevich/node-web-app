import * as express from 'express';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    res.send([]);
  } catch (err) {
    console.error('GET `/` error');
    console.error(err);
    res.status(500).send({ message: 'SERVER_ERROR', err });
  }
});

export const userRoutes = router;
