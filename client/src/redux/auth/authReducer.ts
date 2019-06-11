import { Action } from 'redux';

export interface IAuthReducer {
  authToken: null | string;
  refreshToken: null | string;
}

const initialState: IAuthReducer = {
  authToken: null,
  refreshToken: null,
};

export function authReducer(state: IAuthReducer = initialState, action: Action): IAuthReducer {
  switch (action.type) {
    default:
      return state;
  }
}
