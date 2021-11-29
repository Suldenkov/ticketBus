import { AxiosResponse } from "axios";
import { searchFlights } from "../models/flight";
import $axios from "../utils/axios";

export default class FlightService {
	static fetchFlights(param: searchFlights){
		return $axios.get('http://localhost:8000/api/v1/flight/view/list/', {params: param})
	}

	static fetchDeatilFlight(id?: string): Promise<AxiosResponse<any>> {
		return $axios.get<any>(`http://localhost:8000/api/v1/flight/view/${id}`)
	}
}