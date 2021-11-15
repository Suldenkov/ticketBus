import { UserResponse } from './../models/user';
import $axios from "../utils/axios";
import { AxiosResponse } from 'axios';

export default class UserService {
	static fetchUser(): Promise<AxiosResponse<UserResponse>> {
		return $axios.get<UserResponse>('http://localhost:8000/api/v1/accounts/passenger/me/')
	}
}