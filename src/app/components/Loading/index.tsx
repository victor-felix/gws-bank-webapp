import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export function LoadingComponent({ description }: { description: string }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
      {description && (
        <Typography sx={{ marginLeft: '10px' }} component="p">
          {description}
        </Typography>
      )}
    </Box>
  );
}
