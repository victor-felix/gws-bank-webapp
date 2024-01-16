import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { ToggleThemeComponent } from '../ToggleTheme';
import { LanguageSelectComponent } from '../LanguageSelect';
import styled from 'styled-components';

export function AppBarComponent() {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" color="inherit" component="div">
            GSW Bank
          </Typography>
          <DivOptions>
            <LanguageSelectComponent />
            <ToggleThemeComponent />
          </DivOptions>
        </Toolbar>
      </AppBar>
    </>
  );
}

const DivOptions = styled.div`
  display: flex;
  flex-direction: row;
`;
