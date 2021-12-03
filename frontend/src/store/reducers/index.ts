import { uiReduser } from './UIReduser';
import { authReduser } from './authReduser';

import { ParkCarReduser } from './ParkCarReduser';
import {combineReducers} from 'redux';
import { flightReduser } from './flightReduser';
import { flightDetailReducer } from './flightDetailReduser';


export const rootReduser = combineReducers({
	flights: flightReduser,
	flight: flightDetailReducer,
	park: ParkCarReduser,
	auth: authReduser,
	ui: uiReduser,
})

export type RootState = ReturnType<typeof rootReduser>