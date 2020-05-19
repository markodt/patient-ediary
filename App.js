import 'react-native-gesture-handler';
import React, { useState, useMemo } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import i18n, { LocalizationContext } from './src/localization/i18n';
import store from './src/redux/store';
import { theme } from './src/paper/theme';
import Navigator from './src/components/Navigator';

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
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </StoreProvider>
    </LocalizationContext.Provider>
  );
}
