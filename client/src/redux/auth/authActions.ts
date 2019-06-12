import { ActionType, createAction } from 'typesafe-actions';

import { IAuthData } from './authActions';

export interface IAuthData {
  userId: string;
  accessToken: string;
  refreshToken: string;
}

export const authActions = {
  login: createAction('LOGIN', action => {
    return (username: string, password: string) => action({ username, password });
  }),
  loginSuccess: createAction('LOGIN_SUCCESS', action => {
    return (authData: IAuthData) => action(authData);
  }),
};

export type AuthActionTypes = ActionType<typeof authActions>;
