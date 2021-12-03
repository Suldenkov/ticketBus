
enum uiActionType{
	SET_SNACKBAR = 'SET_SNACKBAR',
	SET_MODAL = 'SET_MODAL',
}

interface snackbarState{
	snackbarOpen:boolean,
	snackbarMessage: string,
	snackbarType: any | undefined,
}

interface uiState{
	snackbar: snackbarState
}

const initialState:uiState = {
	snackbar:{
		snackbarOpen: false,
		snackbarMessage: '',
		snackbarType: 'success'
	}
}

export const uiReduser = (state = initialState, action: any): uiState => {
	switch (action.type){
		case uiActionType.SET_SNACKBAR:
			return {...state, snackbar: {...action.payload}}
		default:
			return state
	}
}


export const setSnackbar = (param: snackbarState) => ({type: uiActionType.SET_SNACKBAR, payload: param})