import { AxiosResponse } from "axios";
import $axios from "../utils/axios";

export default class FlightService {
	static fetchDeatilFlight(id?: string): Promise<AxiosResponse<any>> {
		return $axios.get<any>(`http://localhost:8000/api/v1/flight/view/${id}`)
	}
}