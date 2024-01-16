import * as React from 'react';
import {
  Badge,
  Button,
  Card,
  Chip,
  Grid,
  Modal,
  Typography,
} from '@mui/material';
import { selectWithdrawResponse } from 'app/pages/AccountPage/slice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useAccountSlice } from 'app/pages/AccountPage/slice';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  padding: '10px',
};

export function BanknotesDrawn() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { actions } = useAccountSlice();

  const withdraw = useSelector(selectWithdrawResponse);

  const getQuantityByBanknote = (banknote: number) => {
    if (!withdraw) {
      return 0;
    }

    const quantity = withdraw.filter(item => item.note === banknote);

    if (quantity.length === 0) {
      return 0;
    }

    return quantity[0].quantity;
  };

  const handleClose = () => {
    dispatch(actions.closeResult());
  };

  return (
    <div>
      <Modal
        open={Boolean(withdraw)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <Typography
            variant="h6"
            sx={{ marginBottom: '20px' }}
            textAlign="center"
          >
            {t(messages.resultModalTitle())}
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={6}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Badge
                badgeContent={getQuantityByBanknote(100)}
                showZero
                color="primary"
              >
                <Chip label="R$ 100,00" />
              </Badge>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Badge
                badgeContent={getQuantityByBanknote(50)}
                showZero
                color="primary"
              >
                <Chip label="R$ 50,00" />
              </Badge>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Badge
                badgeContent={getQuantityByBanknote(20)}
                showZero
                color="primary"
              >
                <Chip label="R$ 20,00" />
              </Badge>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Badge
                badgeContent={getQuantityByBanknote(10)}
                showZero
                color="primary"
              >
                <Chip label="R$ 10,00" />
              </Badge>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button variant="contained" onClick={handleClose}>
                Fechar
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Modal>
    </div>
  );
}
