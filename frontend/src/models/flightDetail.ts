export enum flightDetailActionType{
	FETCH_FLIGHT_DETAIL = 'FETCH_FLIGHT_DETAIL',
	FETCH_FLIGHT_DETAIL_SUCCES = 'FETCH_FLIGHT_DETAIL_SUCCES',
	FETCH_FLIGHT_DETAIL_ERROR = 'FETCH_FLIGHT_DETAIL_ERROR',
}

interface flightDetailData{
	id: number,
	countPlace: number,
	busyPlaces: number[],
	scheduledDeparture: string,
	scheduledArrival: string,
	arrivalAutopark: any;
	departureAutopark: any;
	amount: string,
}

export interface flightDetailState{
	flight: flightDetailData,
	loading: boolean,
	error: string | null
}

interface fetchFlightDetailAction{
	type: flightDetailActionType.FETCH_FLIGHT_DETAIL;
}

interface fetchFlightDatailSuccesAction{
	type: flightDetailActionType.FETCH_FLIGHT_DETAIL_SUCCES;
	payload: flightDetailData;
}

interface fetchFlightDatailErrorAction{
	type: flightDetailActionType.FETCH_FLIGHT_DETAIL_ERROR;
	payload: string;
}

export type flightDetailAction = fetchFlightDetailAction | fetchFlightDatailSuccesAction | fetchFlightDatailErrorAction;

