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
			localStorage.setItem('access', response.data.access)
			localStorage.setItem('refresh', response.data.refresh)
			response = await UserService.fetchUser()
			dispath({type: authActionTypes.FETCH_AUTH_SUCCES, payload: response.data})
		} catch (error){
			dispath({type: authActionTypes.FETCH_AUTH_ERROR, payload: 'error'})
		}
	}
}