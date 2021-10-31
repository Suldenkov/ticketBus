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
		case flightActionTypes.SORT_FLIGHTS:
			let flights = [...action.payload.flights].sort((a, b) => a[action.payload.active].localeCompare(b[action.payload.active]))
			return {loading: false, error: null, flights: action.payload.kind === 'bottom' ? flights.reverse() : flights}
		default:
			return state
	}
}