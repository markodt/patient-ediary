import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';
import 'moment/locale/de';
import { LocalizationContext } from '../localization/i18n';
import * as screens from '../../screens.json';

export default class DateTimeScreen extends React.Component {
  static contextType = LocalizationContext;
  constructor(props, context) {
    super(props, context);
    this.state = {
      date: moment()
        .startOf('day')
        .toDate(),
      mode: 'date',
      show: false,
      selected: false,
    };
  }

  onChange = (event, selectedDate) => {
    const date = selectedDate || this.state.date;
    const selected = this.state.selected || Boolean(selectedDate);

    this.setState({
      date,
      show: Platform.OS === 'ios' ? true : false,
      selected,
    });
  };

  showMode = mode => {
    this.setState({ show: true, mode });
  };

  showDatePicker = () => {
    this.showMode('date');
  };

  showTimePicker = () => {
    this.showMode('time');
  };

  render() {
    const { route, navigation } = this.props;
    const { t, locale } = this.context;
    const { date, mode, show, selected } = this.state;
    const screen = screens[route.name];
    moment.locale(locale);

    return (
      <View style={styles.container}>
        <Text style={styles.message}>{t(route.name + '-text')}</Text>
        <View style={styles.dateTimeSection}>
          <TouchableOpacity onPress={this.showDatePicker}>
            <View style={styles.dateTimeField}>
              <Text style={styles.dateTimeText}>
                {selected
                  ? moment(date).format('LL')
                  : t(route.name + '-dateLabel')}
              </Text>
              <Feather
                name="calendar"
                size={16}
                color="#757575"
                style={styles.dateTimeIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.showTimePicker}>
            <View style={styles.dateTimeField}>
              <Text style={styles.dateTimeText}>
                {selected
                  ? moment(date).format('LT')
                  : t(route.name + '-timeLabel')}
              </Text>
              <Feather
                name="clock"
                size={16}
                color="#757575"
                style={styles.dateTimeIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSection}>
          <Button
            mode="contained"
            uppercase={false}
            disabled={!selected}
            onPress={() => navigation.navigate(screen.next)}
          >
            {t('navigation-nextButton')}
          </Button>
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            minimumDate={moment()
              .subtract(7, 'days')
              .toDate()}
            maximumDate={moment().toDate()}
            onChange={this.onChange}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  message: {
    fontSize: 18,
    color: '#212121',
    margin: 30,
  },
  dateTimeSection: {
    marginHorizontal: 30,
  },
  dateTimeField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#757575',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  dateTimeText: {
    fontSize: 16,
    color: '#757575',
  },
  dateTimeIcon: {
    position: 'absolute',
    right: 10,
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
