import { ParkCarActionTypes } from '../../models/parkCar';
import { Dispatch } from "redux"
import { ParkCarAction } from "../../models/parkCar"
import axios from 'axios';

export const fetchParkCar = (param:string) => {
	return async (dispath: Dispatch<ParkCarAction>) => {
		try{
			dispath({type: ParkCarActionTypes.FETCH_PARKCAR});
			const response = await axios.get('http://localhost:8000/api/v1/flight/parkcar/view/list/', {
				params: {
					city: param
				},
			});
			dispath({type: ParkCarActionTypes.FETCH_PARKCAR_SUCCES, payload: response.data})
		} catch (error){
			dispath({type: ParkCarActionTypes.FETCH_PARKCAR_ERROR, payload: 'error'})
		}
	}
}