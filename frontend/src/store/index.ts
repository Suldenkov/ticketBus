import { rootReduser } from './reducers/index';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(rootReduser, applyMiddleware(thunk))