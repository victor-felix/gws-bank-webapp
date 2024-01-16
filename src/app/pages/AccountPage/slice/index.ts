import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AccountState,
  WithdrawActionPayload,
  WithdrawResponsePayload,
} from './types';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { accountSaga } from './sagas';

export const initialState: AccountState = {
  loading: false,
  error: null,
  account: null,
  withdrawResponse: null,
  showBalance: false,
};

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    getAccount(state) {
      state.loading = true;
    },
    getAccountError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    getAccountSuccess(state, action) {
      state.account = action.payload;
      state.loading = false;
    },
    withdraw(state, action: PayloadAction<WithdrawActionPayload>) {
      state.loading = true;
    },
    withdrawSuccess(state, action: PayloadAction<WithdrawResponsePayload[]>) {
      state.loading = false;
      state.withdrawResponse = action.payload;
    },
    withdrawError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    closeResult(state) {
      state.withdrawResponse = null;
    },
    closeError(state) {
      state.error = null;
    },
    setShowBalance(state) {
      state.showBalance = !state.showBalance;
    },
  },
});

export const { actions: accountActions, reducer } = slice;

export const useAccountSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: accountSaga });
  return { actions: slice.actions };
};
