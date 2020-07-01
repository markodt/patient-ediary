import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import localization, {
  LocalizationContext,
} from './src/localization/localization';
import store from './src/redux/store';
import { theme } from './src/paper/theme';
import Navigator from './src/components/Navigator';

export default class App extends React.Component {
  state = {
    appIsReady: false,
    locale: 'en',
  };

  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.getData();
  }

  getData = async () => {
    try {
      const locale = await AsyncStorage.getItem('@locale');
      if (locale !== null) {
        this.setState({ locale });
      }

      this.setState({ appIsReady: true }, async () => {
        await SplashScreen.hideAsync();
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    const { locale } = this.state;
    localization.locale = locale;
    const localizationContext = {
      t: (scope, options) => localization.t(scope, { locale, ...options }),
      locale,
      setLocale: newLocale => this.setState({ locale: newLocale }),
    };

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
}
