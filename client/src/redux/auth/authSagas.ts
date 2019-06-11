import { all, put, takeLatest } from 'redux-saga/effects';

import { AUTH_ACTION_TYPES } from './authConstants';
import { authActions } from './authActions';

function* loginSaga() {
  try {
    yield put(
      authActions.loginSuccess({
        authToken: '123',
        refreshToken: '456',
      }),
    );
  } catch (err) {
    console.error('loginSaga error', err);
  }
}

export const authSagas = function*() {
  yield all([takeLatest(AUTH_ACTION_TYPES.LOGIN, loginSaga)]);
};
