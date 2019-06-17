import axios from 'axios';

export const userApi = {
  getUserData: (userId: string) => {
    return axios.get('/api/user', { params: { userId } });
  },
};
