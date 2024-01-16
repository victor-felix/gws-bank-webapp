import { call, put, takeLatest } from 'redux-saga/effects';
import { accountActions } from '.';
import { AxiosError, AxiosResponse } from 'axios'; // eslint-disable-line
import { axiosInstance } from 'plugins/axios';

export function* getAccount() {
  try {
    const response: AxiosResponse = yield call(
      axiosInstance.get,
      '/accounts/0c9e308a-210e-4531-aed7-70f6e4b3f03f',
    );

    yield put(accountActions.getAccountSuccess(response.data));
  } catch (error: AxiosError | any) {
    if (error.response) {
      yield put(accountActions.getAccountError(error.response.data));
      return;
    }
  }
}
export function* withdraw({ payload }) {
  try {
    const response: AxiosResponse = yield call(
      axiosInstance.post,
      `/accounts/${payload.accountId}/withdraw`,
      {
        amount: Number(payload.amount),
      },
    );

    yield put(accountActions.withdrawSuccess(response.data));
    yield put(accountActions.getAccount());
  } catch (error: AxiosError | any) {
    if (error.response) {
      yield put(accountActions.withdrawError(error.response.data));
      return;
    }
  }
}

export function* accountSaga() {
  yield takeLatest(accountActions.getAccount, getAccount);
  yield takeLatest(accountActions.withdraw, withdraw);
}
