import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { t } from 'i18next';

import { useAccountSlice } from 'app/pages/AccountPage/slice';
import { selectError } from 'app/pages/AccountPage/slice/selectors';
import { messages } from './messages';

export function ErrorAlertComponent() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { actions } = useAccountSlice();
  const withdrawError = useSelector(selectError);

  React.useEffect(() => {
    if (withdrawError) {
      enqueueSnackbar(
        t(messages.getErrorMessage(withdrawError?.message)) as string,
        { variant: 'error' },
      );
      dispatch(actions.closeError());
    }
  }, [withdrawError]); // eslint-disable-line

  return <></>;
}
