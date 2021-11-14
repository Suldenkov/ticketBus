import { fetchUser } from './../store/action-creator/user';
import $axios from "../utils/axios";
import { AxiosResponse } from 'axios';

export default class UserService {
	static fetchUser(): Promise<AxiosResponse<any>> {
		return $axios.get<any>('http://localhost:8000/api/v1/accounts/passenger/me/')
	}
}