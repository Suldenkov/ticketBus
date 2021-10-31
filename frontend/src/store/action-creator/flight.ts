import { FlightAction, flightActionTypes } from './../../models/flight';
import axios from "axios"
import { Dispatch } from 'redux';


export const fetchFlights = () => {
	return async (dispatch: Dispatch<FlightAction>) => {
		try {
			dispatch({type: flightActionTypes.FETCH_FLIGHTS})
			const response = await axios.get('http://localhost:8000/api/v1/flight/view/list/')
			console.log(response.data)
			dispatch({type: flightActionTypes.FETCH_FLIGHTS_SUCCES, payload: response.data})
		} catch (error) {
			dispatch({type: flightActionTypes.FETCH_FLIGHTS_ERROR, payload: 'Error'})
		}
	}
}