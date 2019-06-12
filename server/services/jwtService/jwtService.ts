import { jwtConfig } from './jwtConfig';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const dayMs = 1000 * 60 * 60 * 24;
const yearMs = dayMs * 365;

const saltRounds = 10;

export const jwtService = {
  hashPassword(password: string): string {
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

  generateRefreshToken(userId: string): string {
    const userData = { userId };

    return jwt.sign(userData, jwtConfig.accessTokenSecret, {
      expiresIn: yearMs,
    });
  },
};
