import { ParkCarReduser } from './ParkCarReduser';
import {combineReducers} from 'redux';
import { flightReduser } from './flightReduser';


export const rootReduser = combineReducers({
	flight: flightReduser,
	park: ParkCarReduser,
})

export type RootState = ReturnType<typeof rootReduser>