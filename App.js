import 'react-native-gesture-handler';
import React, { useState, useMemo } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './src/components/Navigator';
import i18n, { LocalizationContext } from './src/localization/i18n';
import { theme } from './theme';

export default function App() {
  const [locale, setLocale] = useState(i18n.locale);
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <LocalizationContext.Provider value={localizationContext}>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </LocalizationContext.Provider>
  );
}
