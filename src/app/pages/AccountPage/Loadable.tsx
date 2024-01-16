/**
 * Asynchronously loads the component for LoginPage
 */

import { lazyLoad } from 'utils/loadable';

export const AccountPage = lazyLoad(
  () => import('./index'),
  module => module.AccountPage,
);
