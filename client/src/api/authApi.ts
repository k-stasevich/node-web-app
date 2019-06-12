import axios from 'axios';

export const authApi = {
  async login(username: string, password: string) {
    return axios.post('/api/login', {
      username,
      password,
    });
  },
};
