import { ParkCarState, ParkCarAction, ParkCarActionTypes } from "./../../models/parkCar"

const initialState:ParkCarState = {
	parks: [],
	loading: false,
	error: null,
}

export const ParkCarReduser = (state = initialState, action: ParkCarAction):ParkCarState => {
	switch (action.type){
		case ParkCarActionTypes.FETCH_PARKCAR:
			return {loading: true, parks: [], error:null}
		case ParkCarActionTypes.FETCH_PARKCAR_SUCCES:
			return {loading: false, parks: action.payload, error: null}
		case ParkCarActionTypes.FETCH_PARKCAR_ERROR:
			return {loading: true, parks: [], error: action.payload}
		default:
			return state
	}
}