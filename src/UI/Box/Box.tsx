import  React from 'react';
import Box from '@mui/material/Box';
import { Button, CardActions, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';

interface Props {
 children: any;
}

const BoxComonent = ({children}:Props) => {
    return <Box
    sx={{
      width: '100%',
      height: '28em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}
  >
    {children}
  </Box>
}

export default BoxComonent;