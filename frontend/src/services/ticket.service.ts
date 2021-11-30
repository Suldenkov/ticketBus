import $axios from "../utils/axios";
import { AxiosResponse } from 'axios';

export default class TicketService {
	static BuyTickets(data: any): Promise<AxiosResponse<any>> {
		return $axios.post<any>('http://localhost:8000/api/v1/flight/ticket/create/', JSON.stringify(data))
	}
}