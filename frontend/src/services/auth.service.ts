import axios from './../utils/axios';
import { Iparam } from "../models/login";
// import axios from "axios";

export const login = async (data: Iparam) => {
	try{
		const f = await axios.post('http://localhost:8000/api/v1/accounts/login/', new URLSearchParams({...data}),
		{
			headers: {
        'Content-Type': `application/x-www-form-urlencoded`,
    }})
		console.log(f)
	} catch(err) {
		console.log(err)
	}
}