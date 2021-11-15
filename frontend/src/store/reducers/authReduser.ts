import { authAction, authActionTypes, authState } from './../../models/user';

const initialState: authState = {
	user: {data:{}, isAuth: false},
	loading: false,
	error: null
}

export const authReduser = (state = initialState, action: authAction): authState => {
	switch (action.type) {
		case authActionTypes.FETCH_AUTH:
			return {loading: true, error: null, user: {data:{}, isAuth: false}}
		case authActionTypes.FETCH_AUTH_SUCCES:
			return {loading: false, error: null, user: {data:action.payload, isAuth: true} }
		case authActionTypes.FETCH_AUTH_ERROR:
			return {loading: false, error: action.payload, user: {data:{}, isAuth: false}}
		default:
			return state
	}
}