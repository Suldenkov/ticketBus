import axios from 'axios';
import $axios from '.';
import { AuthResponse } from '../../models/login';
const lsTokenKey = 'access'

const setToken = (req: any) => {
	if (localStorage.getItem('access'))
		req.headers.Authorization = `Bearer ${localStorage.getItem(lsTokenKey)}`
	return req
}

const setTokenOnLogin = (res: any) => {
	const isLoginUrl = res.config.url.includes('login/')

	if (isLoginUrl)
		localStorage.setItem(lsTokenKey,  res.data.access)
	return res
}

const updateToken = async (error: any) => {
	if (error.response.status === 401 && error.config && !error.config._isRetry){
		const originalRequest = error.config
		originalRequest._isRetry = true
		try{
			let response:any = await axios.post<AuthResponse>('http://localhost:8000/auth/jwt/refresh/', {refresh : localStorage.getItem('refresh')})
			localStorage.setItem('access', response.data.access)
			return $axios.request(originalRequest)
		} catch (error){
			console.log(error)
		}
	}
	throw error
}

export const interceptors = (axios: any) => {
	axios.interceptors.request.use(setToken)
	axios.interceptors.response.use(setTokenOnLogin, updateToken)
}