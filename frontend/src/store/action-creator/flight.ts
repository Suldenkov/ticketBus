import { FlightAction, flightActionTypes, searchFlights } from './../../models/flight';
import { Dispatch } from 'redux';
import FlightService from '../../services/flight.service';


export const fetchFlights = (param:searchFlights) => {
	return async (dispatch: Dispatch<FlightAction>) => {
		try {
			dispatch({type: flightActionTypes.FETCH_FLIGHTS})
			const response = await FlightService.fetchFlights(param) 
			dispatch({type: flightActionTypes.FETCH_FLIGHTS_SUCCES, payload: response.data})
		} catch (error) {
			dispatch({type: flightActionTypes.FETCH_FLIGHTS_ERROR, payload: 'Error'})
		}
	}
}