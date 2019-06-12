import { getType } from 'typesafe-actions';
import { all, put, takeLatest } from 'redux-saga/effects';
import { ToastsStore } from 'react-toasts';

import { authActions } from './authActions';
import { authApi } from '../../api/authApi';
import { setCookie } from '../../helper/cookieHelper';

function* loginSaga(action: ReturnType<typeof authActions.login>) {
  try {
    const { username, password } = action.payload;

    let response;
    try {
      response = yield authApi.login(username, password);
    } catch (err) {
      if (err.response.status === 401) {
        ToastsStore.error('Invalid login or password');
      }
      return;
    }

    const { userId, accessToken, refreshToken } = response.data;

    const min = 60;
    setCookie('acccessToken', accessToken, { expires: 30 * min });
    setCookie('refreshToken', refreshToken);

    yield put(
      authActions.loginSuccess({
        userId,
        accessToken,
        refreshToken,
      }),
    );
  } catch (err) {
    console.error('loginSaga error', err);
  }
}

export const authSagas = function*() {
  yield all([takeLatest(getType(authActions.login), loginSaga)]);
};
