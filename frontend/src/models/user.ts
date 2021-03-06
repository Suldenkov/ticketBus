export enum authActionTypes {
	FETCH_AUTH = 'FETCH_AUTH',
	FETCH_AUTH_SUCCES = 'FETCH_AUTH_SUCCES',
	FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR',
	RESET_AUTH = 'RESET_AUTH'
}

export interface authState {
	user: {
		data: any;
		isAuth: boolean;
	};
	loading: boolean;
	error: null | string;
}

interface FetchAuthAction {
	type: authActionTypes.FETCH_AUTH;
}

interface FetchAuthSuccesAction {
	type: authActionTypes.FETCH_AUTH_SUCCES;
	payload: Object;
}

interface FetchAuthErrorAction {
	type: authActionTypes.FETCH_AUTH_ERROR;
	payload: string;
}

interface ReasetAuth{
	type: authActionTypes.RESET_AUTH
}

export interface UserResponse{
	first_name: string;
	last_name: string;
	passenger: any;
	email: string;
}

export type authAction = FetchAuthAction | FetchAuthSuccesAction | FetchAuthErrorAction | ReasetAuth
