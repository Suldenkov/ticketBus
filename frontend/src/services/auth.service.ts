import { AuthResponse } from './../models/login';
import $axios from './../utils/axios';
import { Iparam } from "../models/login";
import axios, { AxiosResponse } from 'axios';
import { authActionTypes } from '../models/user';
import UserService from './user.service';

export const login = (data: Iparam): Promise<AxiosResponse<any>> => {
		return $axios.post<any>('http://localhost:8000/api/token/', data)
		// new URLSearchParams({...data})
}

export const checkAuth = async (dispath: any) => {
	try{
		dispath({type: authActionTypes.FETCH_AUTH});
		let response:any = await axios.post<AuthResponse>('http://localhost:8000/api/token/refresh/', {refresh : localStorage.getItem('refresh')})
		localStorage.setItem('access', response.data.access)
		response = await UserService.fetchUser()
		dispath({type: authActionTypes.FETCH_AUTH_SUCCES, payload: response.data})
	} catch (error){
		dispath({type: authActionTypes.FETCH_AUTH_ERROR, payload: 'error'})
	}
}