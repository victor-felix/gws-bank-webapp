import { useInjectReducer } from 'redux-injectors';
import { ThemeState } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState: ThemeState = {
  mode: 'light',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
