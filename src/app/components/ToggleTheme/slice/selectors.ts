import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state?.theme || initialState;

export const selectMode = createSelector(
  [selectDomain],
  configurationState => configurationState.mode,
);
