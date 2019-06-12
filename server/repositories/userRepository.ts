import { User } from './../models/user';

export const userRepository = {
  async getUserByUsername(username: string): Promise<User> {
    return User.findOne({ where: { username } });
  },
};
