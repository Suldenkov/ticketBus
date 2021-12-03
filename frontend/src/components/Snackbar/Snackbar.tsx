import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import {useDispatch} from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { setSnackbar } from '../../store/reducers/UIReduser';



const SnackBar:React.FC = () => {
	const dispatch = useDispatch()
	const {snackbar} = useTypeSelector(state => state.ui)

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {

    if (reason === 'clickaway') {
      return;
    }

		const param = {snackbarOpen: false, snackbarMessage:snackbar.snackbarMessage, snackbarType: snackbar.snackbarType}
    dispatch(setSnackbar(param))
  };

	return(
		<Snackbar 
			open={snackbar.snackbarOpen} 
			autoHideDuration={15000} 
			onClose={handleClose} 
			anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
			transitionDuration={1000}
		>
			<Alert onClose={handleClose} severity={snackbar.snackbarType} sx={{ width: '100%', height: '100%' }}>
				{
					snackbar.snackbarMessage
				}
			</Alert>
		</Snackbar>
	)
}


export default SnackBar
