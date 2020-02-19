import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Navigation from '../navigation/Navigation';
import * as data from '../../data.json';

export default function HomeScreen() {
  const { name, currentWeek, totalWeeks, activityNumber } = data;
  return (
    <View style={styles.container}>
      <View style={styles.backgroundView} />
      <Text style={[styles.welcomeText, styles.centerText]}>
        Welcome {name}
      </Text>
      <Text style={[styles.weekText, styles.centerText]}>
        Week {currentWeek} of {totalWeeks}
      </Text>
      <Text style={[styles.activityText, styles.centerText]}>
        You have {activityNumber}{' '}
        {activityNumber === 1 ? 'activity' : 'activities'}
      </Text>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={[styles.title, styles.centerText]}>Headache Diary</Text>
          <View style={styles.centerContent}>
            <Image
              style={styles.headacheImage}
              source={require('../../images/headache1.png')}
            />
          </View>
          <Text style={[styles.mainText, styles.centerText]}>
            Please record any headaches you’ve experienced here.
          </Text>
          <Text style={[styles.noteText, styles.centerText]}>
            Be sure to complete your diary every day, even if you didn’t
            experience a headache.
          </Text>
          <Button mode="contained" uppercase={false} style={styles.beginButton}>
            Begin Headache Diary
          </Button>
        </Card.Content>
      </Card>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F8FB',
    height: '100%',
  },
  backgroundView: {
    width: '100%',
    height: 300,
    backgroundColor: '#0079C9',
    position: 'absolute',
    zIndex: 0,
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
  card: {
    margin: 30,
    marginTop: 15,
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
