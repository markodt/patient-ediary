import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import * as screens from '../../screens_en.json';

export default class DiaryCompleteScreen extends React.Component {
  state = {
    value: null,
  };

  render() {
    const { route, navigation } = this.props;
    const screen = screens[route.name];

    return (
      <View style={styles.container}>
        <Text style={styles.question}>{screen.text}</Text>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Group
            onValueChange={value => this.setState({ value })}
            value={this.state.value}
          >
            <RadioButton.Item
              label="Yes"
              value="yes"
              style={styles.radioButton}
            />
            <RadioButton.Item
              label="No"
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
            onPress={() =>
              navigation.navigate(
                this.state.value === 'yes' ? screen.nextYes : screen.nextNo,
              )
            }
          >
            Next
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
