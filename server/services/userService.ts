import { jwtService } from './jwtService/jwtService';
import { userRepository } from '../repositories/userRepository';
import { User } from './../models/user';

export const userService = {
  async getUserByCreds(username: string, plainTextPassword: string): Promise<User | null> {
    const hashedPassword = jwtService.hashPassword(plainTextPassword);

    const user = await userRepository.getUserByUsername(username);

    if (!user) {
      return null;
    }

    const isPasswordCorrect = jwtService.comparePassword(plainTextPassword, user.password);

    return isPasswordCorrect ? user : null;
  },
};
