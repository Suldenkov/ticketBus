import $axios from './../utils/axios';
import { AuthResponse, Iparam } from "../models/login";
import { AxiosResponse } from 'axios';

export const login = (data: Iparam): Promise<AxiosResponse<any>> => {
		return $axios.post<any>('http://localhost:8000/api/v1/accounts/login/', new URLSearchParams({...data}),
		{
			headers: {
        'Content-Type': `application/x-www-form-urlencoded`,
    }})
}