import { flightDetailAction, flightDetailActionType, flightDetailState } from "../../models/flightDetail"

const initialState: flightDetailState = {
	flight: {amount: '', countPlace: 0, busyPlaces: [], scheduledArrival: '', scheduledDeparture: '', id: 0, arrivalAutopark: {}, departureAutopark: {}},
	loading: false,
	error: null
}

export const flightDetailReducer = (state = initialState, action: flightDetailAction):flightDetailState => {
	switch (action.type){
		case flightDetailActionType.FETCH_FLIGHT_DETAIL:
			return {flight: {amount: '', countPlace: 0, busyPlaces: [], scheduledArrival: '', scheduledDeparture: '', id: 0, arrivalAutopark: {}, departureAutopark: {}}, loading: true, error: null}
		case flightDetailActionType.FETCH_FLIGHT_DETAIL_SUCCES:
			return {flight: action.payload, loading: false, error: null}
		case flightDetailActionType.FETCH_FLIGHT_DETAIL_ERROR:
			return {flight: {amount: '', countPlace: 0, busyPlaces: [], scheduledArrival: '', scheduledDeparture: '', id: 0, arrivalAutopark: {}, departureAutopark: {}}, loading: false, error: action.payload}
		default:
			return state
	}
}