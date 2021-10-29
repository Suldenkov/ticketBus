import { FlightAction, flightActionTypes, flightState } from "../../models/flight"

const initialState: flightState = {
	flights: [],
	loading: false,
	error: null
}

export const flightReduser = (state = initialState, action: FlightAction): flightState => {
	switch (action.type) {
		case flightActionTypes.FETCH_FLIGHTS:
			return {loading: true, error: null, flights: []}
		case flightActionTypes.FETCH_FLIGHTS_SUCCES:
			return {loading: false, error: null, flights: action.payload}
		case flightActionTypes.FETCH_FLIGHTS_ERROR:
			return {loading: false, error: action.payload, flights: []}
		default:
			return state
	}
}