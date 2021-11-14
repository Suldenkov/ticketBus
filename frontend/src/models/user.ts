export enum authActionTypes {
	FETCH_AUTH = 'FETCH_AUTH',
	FETCH_AUTH_SUCCES = 'FETCH_AUTH_SUCCES',
	FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR',
}

export interface authState {
	user: {};
	loading: boolean;
	error: null | string;
}

interface FetchAuthAction {
	type: authActionTypes.FETCH_AUTH;
}

interface FetchAuthSuccesAction {
	type: authActionTypes.FETCH_AUTH_SUCCES;
	payload: any[];
}

interface FetchAuthErrorAction {
	type: authActionTypes.FETCH_AUTH_ERROR;
	payload: string;
}

export type authAction = FetchAuthAction | FetchAuthSuccesAction | FetchAuthErrorAction;
