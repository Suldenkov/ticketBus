export enum flightActionTypes {
	FETCH_FLIGHTS = 'FETCH_FLIGHTS',
	FETCH_FLIGHTS_SUCCES = 'FETCH_FLIGHTS_SUCCES',
	FETCH_FLIGHTS_ERROR = 'FETCH_FLIGHTS_ERROR'
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

export type FlightAction = FetchFlightsAction | FetchFlightsSuccesAction | FetchFlightsErrorAction;
