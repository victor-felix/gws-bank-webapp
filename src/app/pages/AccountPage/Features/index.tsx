import * as React from 'react';
import {
  Card,
  Divider,
  Grid /* Typography */,
  Typography,
} from '@mui/material';
// import { useSelector } from 'react-redux';
import { BalanceCard } from './BalanceCard';
import { WithdrawForm } from './WithdrawForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccount, selectLoading } from '../slice/selectors';
import { useAccountSlice } from '../slice';
import { LoadingComponent } from 'app/components/Loading';
import { AccountBalanceWallet, Money } from '@mui/icons-material';
import { BanknotesDrawn } from 'app/components/BanknotesDrawn';
import { useTranslation } from 'react-i18next';
import { messages } from '../messages';

export function Features() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { actions } = useAccountSlice();
  const account = useSelector(selectAccount);
  const loading = useSelector(selectLoading);

  React.useEffect(() => {
    if (!account && !loading) {
      dispatch(actions.getAccount());
    }
  }, [account]); // eslint-disable-line

  if (loading) {
    return <LoadingComponent description="Carregando..." />;
  }

  return (
    <Grid container component={Card} sx={{ padding: '15px' }} spacing={1}>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography>
          {t(messages.welcomeLabel()) + ' ' + account?.clientName}
        </Typography>
        <Typography>
          {t(messages.accountLabel()) + ' ' + account?.accountNumber}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ margin: '10px 0' }}>
        <Divider />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6">
          <AccountBalanceWallet /> {t(messages.balanceLabel())}
        </Typography>
        <BalanceCard />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">
          <Money /> {t(messages.withdrawLabel())}
        </Typography>
        <WithdrawForm />
      </Grid>
      <BanknotesDrawn />
    </Grid>
  );
}
