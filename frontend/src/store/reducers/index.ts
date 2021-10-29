import {combineReducers} from 'redux';
import { flightReduser } from './flightReduser';


export const rootReduser = combineReducers({
	flight: flightReduser,
})

export type RootState = ReturnType<typeof rootReduser>