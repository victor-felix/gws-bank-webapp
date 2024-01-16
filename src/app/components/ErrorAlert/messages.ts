import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  getErrorMessage: (message: string | null | undefined) => {
    switch (message) {
      case 'api.error.insufficientFunds':
        return _t(
          translations.api.error.insufficientFunds,
          'Insufficient funds',
        );
      case 'api.error.insufficientNotes':
        return _t(
          translations.api.error.insufficientNotes,
          'Insufficient notes',
        );
      default:
        return _t(translations.api.error.unexpected, 'Unexpected error');
    }
  },
};
