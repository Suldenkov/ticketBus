import { AxiosResponse } from "axios";
import { fetchPlaceResponse } from "../models/place";
import $axios from "../utils/axios";

export default class PlaceService {
	static fetchPlace(): Promise<AxiosResponse<fetchPlaceResponse>> {
		return $axios.get<fetchPlaceResponse>('http://localhost:8000/api/v1/flight/seats/view/')
	}
}