import {applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducers, middleware);