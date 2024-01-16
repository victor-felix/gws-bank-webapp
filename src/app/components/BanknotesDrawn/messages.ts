import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  closeResultButtonLabel: () =>
    _t(translations.button.labels.closeResultModal, 'Close'),
  resultModalTitle: () =>
    _t(translations.textLabels.resultModalTitle, 'Withdraw Result'),
};
