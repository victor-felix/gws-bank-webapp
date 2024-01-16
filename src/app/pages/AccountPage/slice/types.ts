import { ApiResponseError } from 'types';

export interface Account {
  accountId: string;
  accountNumber: string;
  agency: string;
  balance: number;
  clientName: string;
}
export interface AccountState {
  loading: boolean;
  error: ApiResponseError | null;
  account: Account | null;
  withdrawResponse: WithdrawResponsePayload[] | null;
  showBalance: boolean;
}

export interface WithdrawResponsePayload {
  note: number;
  quantity: number;
}

export interface WithdrawActionPayload {
  accountId?: string;
  amount: number;
}
