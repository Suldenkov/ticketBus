import {interceptors} from './interseptors';
import axios from "axios";

const instance = axios.create({
	headers: {
		'Content-Type' : 'application/json'
	}
})

interceptors(instance)

export default instance