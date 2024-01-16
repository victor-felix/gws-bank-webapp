/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { GlobalStyle } from 'styles/global-styles';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { AccountPage } from './pages/AccountPage';
import { selectMode } from './components/ToggleTheme/slice/selectors';

export function App() {
  const mode = useSelector(selectMode);

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode as PaletteMode,
          primary: {
            main: indigo[500],
          },
        },
        typography: {
          fontFamily: ['Raleway Variable', 'sans-serif'].join(','),
        },
      }),
    [mode],
  );

  theme = responsiveFontSizes(theme);

  const { i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <Routes>
          <Route path="/" element={<AccountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <GlobalStyle theme={mode} />
      </BrowserRouter>
    </ThemeProvider>
  );
}
