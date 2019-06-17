import { all, fork } from 'redux-saga/effects';

import { authSagas } from './auth/authSagas';
import { userSagas } from './user/userSagas';

export const allSagas = function*() {
  yield all([fork(authSagas), fork(userSagas)]);
};
