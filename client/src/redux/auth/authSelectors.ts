import { createSelector } from 'reselect';

import { IState } from './../rootReducer';

export const isAuthorizedSelector = createSelector(
  [(state: IState) => state.auth],
  authReducer => !!authReducer.accessToken,
);

export const getUserIdSelector = createSelector(
  [(state: IState) => state.auth],
  authReducer => authReducer.userId,
);
