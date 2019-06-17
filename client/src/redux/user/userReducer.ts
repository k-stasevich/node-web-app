import { getType } from 'typesafe-actions';

import { IUserData, userActions, UserActionTypes } from './userActions';

export interface IUserReducer {
  userData: IUserData | null;
}

const initialState: IUserReducer = {
  userData: null,
};

export function userReducer(
  state: IUserReducer = initialState,
  action: UserActionTypes,
): IUserReducer {
  switch (action.type) {
    case getType(userActions.getUserDataSuccess):
      const { payload } = action;
      return {
        ...state,
        userData: payload,
      };

    default:
      return state;
  }
}
