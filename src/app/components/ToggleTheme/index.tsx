import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { selectMode } from './slice/selectors';

export function ToggleThemeComponent() {
  const dispatch = useDispatch();
  const { actions } = useThemeSlice();
  const theme = useSelector(selectMode);

  const handleClick = () => {
    dispatch(actions.setMode(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <IconButton onClick={handleClick}>
      {theme === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}
