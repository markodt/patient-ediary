import React from 'react';
import i18n from 'i18n-js';
import * as en from './translations_en.json';
import * as de from './translations_de.json';

i18n.translations = { en, de };
i18n.fallbacks = true;

export const Languages = {
  en: 'English',
  de: 'Deutsch',
};

export const LocalizationContext = React.createContext();

export default i18n;
