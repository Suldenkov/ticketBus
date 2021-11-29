export enum flightActionTypes {
	FETCH_FLIGHTS = 'FETCH_FLIGHTS',
	FETCH_FLIGHTS_SUCCES = 'FETCH_FLIGHTS_SUCCES',
	FETCH_FLIGHTS_ERROR = 'FETCH_FLIGHTS_ERROR',
	SORT_FLIGHTS = 'SORT_FLIGHTS',
}

export interface flightState {
	flights: any[];
	loading: boolean;
	error: null | string;
}

interface FetchFlightsAction {
	type: flightActionTypes.FETCH_FLIGHTS;
}

interface FetchFlightsSuccesAction {
	type: flightActionTypes.FETCH_FLIGHTS_SUCCES;
	payload: any[];
}

interface FetchFlightsErrorAction {
	type: flightActionTypes.FETCH_FLIGHTS_ERROR;
	payload: string;
}

interface SortFlightsAction {
	type: flightActionTypes.SORT_FLIGHTS;
	payload: {
		active:string;
		kind:string;
		flights: any[];
	};
}

export type FlightAction = FetchFlightsAction | FetchFlightsSuccesAction | FetchFlightsErrorAction | SortFlightsAction


export interface searchFlights{
	arrival:string;
	departure:string;
	date: string;
}

export interface Isort{
	active:string;
	kind:string;
}