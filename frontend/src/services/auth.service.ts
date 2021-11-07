import axios from './../utils/axios';
import { Iparam } from "../models/login";

export const login = async (data: Iparam) => {
	try{
		await axios.post('http://localhost:8000/api/v1/accounts/auth/token/', data)
	} catch(err) {
		console.log(err)
	}
}