import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Card, Button } from 'react-native-paper';
import { LocalizationContext } from '../localization/i18n';
import * as data from '../../data.json';

export default function HomeScreen({ navigation }) {
  const { name, currentWeek, totalWeeks, activityNumber } = data;
  const { t } = React.useContext(LocalizationContext);

  return (
    <View style={styles.container}>
      <View style={styles.welcomeView}>
        <Text style={[styles.welcomeText, styles.centerText]}>
          {t('home-welcome')} {name}
        </Text>
        <Text style={[styles.weekText, styles.centerText]}>
          {t('home-week')} {currentWeek} {t('home-of')} {totalWeeks}
        </Text>
        <Text style={[styles.activityText, styles.centerText]}>
          {t('home-youHave')} {activityNumber}{' '}
          {activityNumber === 1 ? t('home-activity') : t('home-activities')}
        </Text>
      </View>
      <View style={styles.cardView}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={[styles.title, styles.centerText]}>
              {t('home-title')}
            </Text>
            <View style={styles.centerContent}>
              <Image
                style={styles.headacheImage}
                source={require('../../images/headache1.png')}
              />
            </View>
            <Text style={[styles.mainText, styles.centerText]}>
              {t('home-mainText')}
            </Text>
            <Text style={[styles.noteText, styles.centerText]}>
              {t('home-noteText')}
            </Text>
            <Button
              mode="contained"
              uppercase={false}
              style={styles.beginButton}
              onPress={() => navigation.navigate('h1')}
            >
              {t('home-beginButton')}
            </Button>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
    backgroundColor: '#f3f8fb',
    flex: 1,
  },
  welcomeView: {
    height: 300,
    backgroundColor: '#0079c9',
  },
  centerText: {
    textAlign: 'center',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    marginTop: 50,
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#fff',
  },
  weekText: {
    marginTop: 10,
    fontSize: 28,
    color: '#fff',
  },
  activityText: {
    marginTop: 10,
    color: '#fff',
  },
  cardView: {
    flex: 1,
  },
  card: {
    marginHorizontal: 30,
    marginTop: -130,
    padding: 15,
  },
  title: {
    fontSize: 16,
    color: '#757575',
    textTransform: 'uppercase',
  },
  headacheImage: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    marginHorizontal: 30,
    marginBottom: 10,
  },
  noteText: {
    fontSize: 14,
    color: '#757575',
    marginHorizontal: 40,
  },
  beginButton: {
    marginTop: 20,
  },
});
