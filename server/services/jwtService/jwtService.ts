import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { jwtConfig } from './jwtConfig';
import { IUserData } from './../../middlewares/IUserData';

const dayMs = 1000 * 60 * 60 * 24;
const yearMs = dayMs * 365;

export const jwtService = {
  hashPassword(password: string): string {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
  },

  comparePassword(plainTextPassword: string, hash: string): boolean {
    return bcrypt.compareSync(plainTextPassword, hash);
  },

  generateAccessToken(userId: string): string {
    const userData = { userId };

    return jwt.sign(userData, jwtConfig.accessTokenSecret, {
      expiresIn: '30m',
    });
  },

  verifyAccessToken(token: string): IUserData {
    const userData = jwt.verify(token, jwtConfig.accessTokenSecret) as IUserData;
    return userData;
  },

  generateRefreshToken(userId: string): string {
    const userData = { userId };

    return jwt.sign(userData, jwtConfig.accessTokenSecret, {
      expiresIn: yearMs,
    });
  },
};
