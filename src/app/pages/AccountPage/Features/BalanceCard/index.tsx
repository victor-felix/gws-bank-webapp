import React from 'react';
import { Card, Grid, IconButton, Typography } from '@mui/material';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccount, selectShowBalance } from '../../slice/selectors';
import { useAccountSlice } from '../../slice';

export function BalanceCard() {
  const dispatch = useDispatch();
  const { actions } = useAccountSlice();
  const account = useSelector(selectAccount);
  const showBalance = useSelector(selectShowBalance);

  const handleClick = () => {
    dispatch(actions.setShowBalance());
  };

  return (
    <Card
      variant="outlined"
      sx={{ minWidth: '200px', padding: '5px', height: '150px' }}
    >
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={12}>
          <IconButton onClick={handleClick}>
            {showBalance ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" textAlign="center">
            {showBalance
              ? new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(Number(account?.balance))
              : '*****'}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
