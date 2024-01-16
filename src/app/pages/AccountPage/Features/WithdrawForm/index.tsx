import * as React from 'react';
import { AttachMoneyOutlined } from '@mui/icons-material';
import { Button, Card, Grid, InputAdornment, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

import { useAccountSlice } from '../../slice';
import { useTranslation } from 'react-i18next';
import { messages } from '../../messages';
import { selectAccount } from '../../slice/selectors';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={values => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator="."
        decimalSeparator=","
        valueIsNumericString
        fixedDecimalScale
        decimalScale={2}
        prefix="R$ "
      />
    );
  },
);

export function WithdrawForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { actions } = useAccountSlice();
  const account = useSelector(selectAccount);

  const formik = useFormik({
    initialValues: {
      amount: 0,
    },
    validationSchema: yup.object({
      amount: yup.number().required(t(messages.amountRequiredValidation())),
    }),
    onSubmit: values => {
      dispatch(
        actions.withdraw({
          amount: values.amount,
          accountId: account?.accountId,
        }),
      );
    },
  });

  return (
    <Card
      variant="outlined"
      sx={{
        padding: '5px',
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              name="amount"
              label={t(messages.amountInputLabel())}
              variant="filled"
              fullWidth
              size="small"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.amount && Boolean(formik.errors.amount)}
              helperText={formik.touched.amount && formik.errors.amount}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AttachMoneyOutlined />
                  </InputAdornment>
                ),
                inputComponent: NumericFormatCustom as any,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button variant="contained" size="small" type="submit" fullWidth>
              {t(messages.confirmWithdrawButtonLabel())}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}
