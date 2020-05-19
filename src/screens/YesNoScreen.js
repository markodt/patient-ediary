import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/connect';
import { LocalizationContext } from '../localization/i18n';
import * as screens from '../data/screens.json';

class YesNoScreen extends React.Component {
  static contextType = LocalizationContext;
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: null,
    };
  }

  handleNextButtonPress = screen => {
    const {
      navigation,
      currentResponse,
      addResponse,
      changeResponse,
    } = this.props;
    const newResponse = {
      id: screen.id,
      type: screen.type,
      value: this.state.value,
    };

    if (!currentResponse) {
      addResponse(newResponse);
    } else if (currentResponse.value !== this.state.value) {
      changeResponse(newResponse);
    }

    navigation.navigate(
      this.state.value === 'yes' ? screen.nextYes : screen.nextNo,
    );
  };

  render() {
    const {
      route: { name: screenId },
    } = this.props;
    const { t } = this.context;
    const screen = { ...screens[screenId], id: screenId };

    return (
      <View style={styles.container}>
        <Text style={styles.question}>{t(screenId + '-text')}</Text>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Group
            onValueChange={value => this.setState({ value })}
            value={this.state.value}
          >
            <RadioButton.Item
              label={t('label-yes')}
              value="yes"
              style={styles.radioButton}
            />
            <RadioButton.Item
              label={t('label-no')}
              value="no"
              style={styles.radioButton}
            />
          </RadioButton.Group>
        </View>
        <View style={styles.bottomSection}>
          <Button
            mode="contained"
            uppercase={false}
            disabled={!this.state.value}
            onPress={() => this.handleNextButtonPress(screen)}
          >
            {t('navigation-nextButton')}
          </Button>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(YesNoScreen);

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
