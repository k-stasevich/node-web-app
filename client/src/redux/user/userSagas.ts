import { ToastsStore } from 'react-toasts';
import { getType } from 'typesafe-actions';
import { all, takeLatest, put } from 'redux-saga/effects';

import { userActions } from './userActions';
import { userApi } from '../../api/userApi';

function* getUserDataSaga(action: ReturnType<typeof userActions.getUserData>): Generator {
  try {
    const userId = action.payload.userId;

    let response;
    try {
      response = yield userApi.getUserData(userId);
    } catch (err) {
      ToastsStore.error('Oops... Something goes wrong :(');
      return;
    }

    put(userActions.getUserDataSuccess(response.data));
  } catch (err) {
    console.error('getUserDataSaga error', err);
  }
}

export const userSagas = function*() {
  yield all([takeLatest(getType(userActions.getUserData), getUserDataSaga)]);
};
