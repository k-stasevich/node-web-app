import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';
import { history } from './../history';
import { allSagas } from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
);

sagaMiddleware.run(allSagas);
