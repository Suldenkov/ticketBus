import { flightDetailAction, flightDetailActionType } from "../../models/flightDetail"
import FlightService from "../../services/flight.service"
import { Dispatch } from 'redux';

export const fetchFlightDetail = (id?:string) => {
	return async (dispatch: Dispatch<flightDetailAction>) => {
		try {
			dispatch({type: flightDetailActionType.FETCH_FLIGHT_DETAIL})
			const response = await FlightService.fetchDeatilFlight(id)
			dispatch({type: flightDetailActionType.FETCH_FLIGHT_DETAIL_SUCCES, payload: response.data})
		} catch (error) {
			dispatch({type: flightDetailActionType.FETCH_FLIGHT_DETAIL_ERROR, payload: 'Error'})
		}
	}
}