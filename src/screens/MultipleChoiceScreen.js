import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import { LocalizationContext } from '../localization/i18n';
import * as screens from '../../screens.json';

export default class MultipleChoiceScreen extends React.Component {
  static contextType = LocalizationContext;
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: null,
    };
  }

  render() {
    const { route, navigation } = this.props;
    const { t } = this.context;
    const screen = screens[route.name];

    return (
      <View style={styles.container}>
        <Text style={styles.question}>{t(route.name + '-text')}</Text>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Group
            onValueChange={value => this.setState({ value })}
            value={this.state.value}
          >
            {screen.choices.map((choice, index) => {
              const label = t(route.name + '-' + choice);
              return (
                <RadioButton.Item
                  key={index}
                  label={label}
                  value={label.toLowerCase()}
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
            disabled={!this.state.value}
            onPress={() => navigation.navigate(screen.next)}
          >
            {t('navigation-nextButton')}
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  question: {
    fontSize: 18,
    color: '#212121',
    margin: 30,
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
