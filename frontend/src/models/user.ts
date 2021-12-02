export enum authActionTypes {
	FETCH_AUTH = 'FETCH_AUTH',
	FETCH_AUTH_SUCCES = 'FETCH_AUTH_SUCCES',
	FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR',
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

export interface UserResponse{
	username: string;
	last_name: string;
	passenger: any;
	email: string;
}

export type authAction = FetchAuthAction | FetchAuthSuccesAction | FetchAuthErrorAction;
