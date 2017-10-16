import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReduxWaitForMiddleware from 'redux-wait-for-action';

import reducer from '../reducer';
import sagas from '../sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const waitForActionMiddleware = createReduxWaitForMiddleware();

const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(sagaMiddleware, waitForActionMiddleware))
);

sagaMiddleware.run(sagas);

export default store;