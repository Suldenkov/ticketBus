export enum userActionTypes {
	FETCH_USER = 'FETCH_USER',
	FETCH_USER_SUCCES = 'FETCH_USER_SUCCES',
	FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

export interface userState {
	user: any[];
	loading: boolean;
	error: null | string;
}

interface FetchUserAction {
	type: userActionTypes.FETCH_USER;
}

interface FetchUserSuccesAction {
	type: userActionTypes.FETCH_USER_SUCCES;
	payload: any[];
}

interface FetchUserErrorAction {
	type: userActionTypes.FETCH_USER_ERROR;
	payload: string;
}

export type userAction = FetchUserAction | FetchUserSuccesAction | FetchUserErrorAction;
