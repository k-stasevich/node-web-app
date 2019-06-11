import { IAuthData } from './authActions';
import { AUTH_ACTION_TYPES } from './authConstants';

export interface IAuthData {
  authToken: string;
  refreshToken: string;
}

export const authActions = {
  login: () => ({
    type: AUTH_ACTION_TYPES.LOGIN,
  }),
  loginSuccess: (authData: IAuthData) => ({
    type: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
    payload: authData,
  }),
};
