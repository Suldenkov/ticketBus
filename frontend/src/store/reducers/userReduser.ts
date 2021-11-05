import { userActionTypes, userState, userAction} from "../../models/user"

const initialState: userState = {
	user: [],
	loading: false,
	error: null
}

export const userReduser = (state = initialState, action: userAction): userState => {
	switch (action.type) {
		case userActionTypes.FETCH_USER:
			return {loading: true, error: null, user: []}
		case userActionTypes.FETCH_USER_SUCCES:
			return {loading: false, error: null, user: action.payload}
		case userActionTypes.FETCH_USER_ERROR:
			return {loading: false, error: action.payload, user: []}
		default:
			return state
	}
}