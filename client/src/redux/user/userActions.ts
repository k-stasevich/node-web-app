import { ActionType, createAction } from 'typesafe-actions';

export interface IUserData {
  userId: string;
  fname: string;
  lname: string;
}

export const userActions = {
  getUserData: createAction('GET_USER_DATA', action => {
    return (userId: string) => action({ userId });
  }),
  getUserDataSuccess: createAction('GET_USER_DATA_SUCCESS', action => {
    return (userData: IUserData) => action(userData);
  }),
};

export type UserActionTypes = ActionType<typeof userActions>;
