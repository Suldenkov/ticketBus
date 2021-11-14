import {interceptors} from './interseptors';
import axios from "axios";

const $axios = axios.create({
	headers: {
		'Content-Type' : 'application/json'
	}
})

interceptors($axios)

export default $axios