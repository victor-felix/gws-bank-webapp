import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  welcomeLabel: () => _t(translations.textLabels.welcome, 'Welcome, '),
  accountLabel: () => _t(translations.textLabels.account, 'Account'),
  withdrawLabel: () => _t(translations.textLabels.withdraw, 'Withdraw'),
  balanceLabel: () => _t(translations.textLabels.balance, 'Balance'),
  confirmWithdrawButtonLabel: () =>
    _t(translations.button.labels.confirmWithdraw, 'Confirm'),
  amountInputLabel: () => _t(translations.input.labels.amountLabel, 'Amount'),
  amountRequiredValidation: () =>
    _t(
      translations.input.validations.amountIsRequiredMessage,
      'Amount is required',
    ),
};
