import express from 'express';

import { jwtService } from './../services/jwtService/jwtService';

export const protectedRouteMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { accessToken } = req.cookies;

  try {
    const userData = jwtService.verifyAccessToken(accessToken);
    req.user = userData;
  } catch (err) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  next();
};
