export enum ParkCarActionTypes{
	FETCH_PARKCAR = 'FETCH_PARKCAR',
	FETCH_PARKCAR_SUCCES = 'FETCH_PARKCAR_SUCCES',
	FETCH_PARKCAR_ERROR = 'FETCH_PARKCAR_ERROR',
}

export interface ParkCarState{
	parks: any[];
	loading: boolean;
	error: string | null;
}

interface FetchParkCarAction{
	type: ParkCarActionTypes.FETCH_PARKCAR;
}

interface FetchParkCarSuccesAction{
	type: ParkCarActionTypes.FETCH_PARKCAR_SUCCES;
	payload: any[];
}

interface FetchParkCarFailureAction{
	type: ParkCarActionTypes.FETCH_PARKCAR_ERROR;
	payload: string;
}

export type ParkCarAction = FetchParkCarAction | FetchParkCarSuccesAction | FetchParkCarFailureAction;