import { userAction, userActionTypes } from './../../models/user';
import { Dispatch } from "redux"
import axios from 'axios';
import { Iparam } from '../../models/login';


export const fetchUser = (param:Iparam) => {
	return async (dispath: Dispatch<userAction>) => {
		try{
			dispath({type: userActionTypes.FETCH_USER});
			const response = await axios.post('http://localhost:8000/api/v1/accounts/auth/token/', param);
			console.log(response)
			dispath({type: userActionTypes.FETCH_USER_SUCCES, payload: response.data})
		} catch (error){
			dispath({type: userActionTypes.FETCH_USER_ERROR, payload: 'error'})
		}
	}
}