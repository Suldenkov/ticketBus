import { AuthResponse } from './../../models/login';
import { login } from './../../services/auth.service';
import { authAction, authActionTypes } from './../../models/user';
import { Dispatch } from "redux"
import { Iparam } from '../../models/login';
import UserService from '../../services/user.service';


export const fetchUser = (param:Iparam) => {
	return async (dispath: Dispatch<authAction>) => {
		try{
			dispath({type: authActionTypes.FETCH_AUTH});
			let response = await login(param)
			localStorage.setItem('access_token', response.data.access_token)
			response = await UserService.fetchUser()
			console.log(response.data)
			// dispath({type: userActionTypes.FETCH_USER_SUCCES, payload: response.data})
		} catch (error){
			dispath({type: authActionTypes.FETCH_AUTH_ERROR, payload: 'error'})
		}
	}
}