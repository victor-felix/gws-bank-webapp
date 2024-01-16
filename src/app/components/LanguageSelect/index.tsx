import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

export function LanguageSelectComponent() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = event => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <FormControl
      size="small"
      variant="standard"
      sx={{ width: '75px', marginRight: '10px' }}
    >
      <InputLabel id="lang-select-label">
        {t(messages.languageSelectLabel())}
      </InputLabel>
      <Select
        labelId="lang-select-label"
        id="lang-select"
        value={i18n.language}
        label="Age"
        onChange={handleLanguageChange}
      >
        <MenuItem value="en">EN</MenuItem>
        <MenuItem value="pt-BR">PT-BR</MenuItem>
      </Select>
    </FormControl>
  );
}
