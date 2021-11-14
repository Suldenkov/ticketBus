import { authAction, authActionTypes, authState } from './../../models/user';

const initialState: authState = {
	user: {},
	loading: false,
	error: null
}

export const authReduser = (state = initialState, action: authAction): authState => {
	switch (action.type) {
		case authActionTypes.FETCH_AUTH:
			return {loading: true, error: null, user: {}}
		case authActionTypes.FETCH_AUTH_SUCCES:
			return {loading: false, error: null, user: action.payload}
		case authActionTypes.FETCH_AUTH_ERROR:
			return {loading: false, error: action.payload, user: {}}
		default:
			return state
	}
}