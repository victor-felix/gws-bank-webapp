import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import { AppBarComponent } from '../../components/AppBar';
import { Features } from './Features';
import { ErrorAlertComponent } from 'app/components/ErrorAlert';

export function AccountPage() {
  return (
    <>
      <Helmet>
        <title>AccountPage</title>
        <meta
          name="description"
          content="A Boilerplate application login page"
        />
      </Helmet>
      <AppBarComponent />
      <Container
        maxWidth="md"
        sx={{
          height: '93vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Features />
      </Container>
      <ErrorAlertComponent />
    </>
  );
}
