import { getType } from 'typesafe-actions';

import { AuthActionTypes, authActions } from './authActions';

export interface IAuthReducer {
  userId: null | string;
  accessToken: null | string;
  refreshToken: null | string;
}

const initialState: IAuthReducer = {
  userId: null,
  accessToken: null,
  refreshToken: null,
};

export function authReducer(
  state: IAuthReducer = initialState,
  action: AuthActionTypes,
): IAuthReducer {
  switch (action.type) {
    case getType(authActions.loginSuccess):
      const { payload } = action;
      return {
        ...state,
        userId: payload.userId,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      };

    default:
      return state;
  }
}
