import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state?.account || initialState;

export const selectAccount = createSelector(
  [selectDomain],
  accountState => accountState.account,
);

export const selectLoading = createSelector(
  [selectDomain],
  accountState => accountState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  accountState => accountState.error,
);

export const selectWithdrawResponse = createSelector(
  [selectDomain],
  accountState => accountState.withdrawResponse,
);

export const selectShowBalance = createSelector(
  [selectDomain],
  accountState => accountState.showBalance,
);
