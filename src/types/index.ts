import { RootState } from './RootState';

export type { RootState };

export interface ApiResponseError {
  message: string;
  error: string;
  statusCode: 0;
}
