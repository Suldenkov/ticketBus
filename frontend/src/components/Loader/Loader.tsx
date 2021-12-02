import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader:React.FC = () =>{
  return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '4em'}}>
        <CircularProgress size={'5em'}/>
      </Box>
  )
}

export default Loader