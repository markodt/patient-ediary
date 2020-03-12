import React from 'react';
import { View, Text, Platform, StatusBar, StyleSheet } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import { Languages, LocalizationContext } from '../localization/i18n';

export default class SettingsScreen extends React.Component {
  static contextType = LocalizationContext;
  constructor(props, context) {
    super(props, context);
    this.state = {
      locale: this.context.locale,
    };
  }

  render() {
    const { navigation } = this.props;
    const { t, locale, setLocale } = this.context;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Change Language</Text>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Group
            onValueChange={value => this.setState({ locale: value })}
            value={this.state.locale}
          >
            {Object.entries(Languages).map(([langCode, langName]) => {
              return (
                <RadioButton.Item
                  key={langCode}
                  label={langName}
                  value={langCode}
                  style={styles.radioButton}
                />
              );
            })}
          </RadioButton.Group>
        </View>
        <View style={styles.bottomSection}>
          <Button
            mode="contained"
            uppercase={false}
            disabled={this.state.locale === locale}
            onPress={() => {
              setLocale(this.state.locale);
              navigation.navigate('home');
            }}
          >
            Save Settings
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    margin: 30,
  },
  subtitle: {
    fontSize: 18,
    color: '#212121',
    marginHorizontal: 30,
    marginBottom: 30,
  },
  radioButtonContainer: {
    marginHorizontal: 30,
    borderTopColor: '#979797',
    borderTopWidth: 1,
  },
  radioButton: {
    borderBottomColor: '#979797',
    borderBottomWidth: 1,
  },
  bottomSection: {
    width: '100%',
    borderTopColor: '#d8d8d8',
    borderTopWidth: 1,
    padding: 30,
    position: 'absolute',
    bottom: 0,
  },
});
