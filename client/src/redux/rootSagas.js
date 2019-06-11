import { all, fork } from 'redux-saga/effects';

import { authSagas } from './auth/authSagas';

export const allSagas = function*() {
  yield all([fork(authSagas)]);
};
