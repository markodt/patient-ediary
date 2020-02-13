import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph, Subheading } from 'react-native-paper';
import * as data from '../../data.json';

export default function HomeScreen() {
  const { name, currentWeek, totalWeeks, activityNumber, alertNumber } = data;
  return (
    <View>
      <Text style={styles.welcomeText}>Welcome {name}</Text>
      <Text style={styles.weekText}>
        Week {currentWeek} of {totalWeeks}
      </Text>
      <Text style={styles.activityText}>
        You have {activityNumber}{' '}
        {activityNumber === 1 ? 'activity' : 'activities'}
      </Text>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Headache Diary</Title>
          <View style={styles.centerContent}>
            <Image
              style={styles.headacheImage}
              source={require('../../images/headache1.png')}
            />
          </View>
          <Subheading style={styles.centerText}>
            Please record any headaches you’ve experienced here.
          </Subheading>
          <Paragraph style={styles.centerText}>
            Be sure to complete your diary every day, even if you didn’t
            experience a headache.
          </Paragraph>
          <Button mode="contained">Begin Headache Diary</Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
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
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  weekText: {
    marginTop: 10,
    fontSize: 28,
    textAlign: 'center',
  },
  activityText: {
    marginTop: 10,
    textAlign: 'center',
  },
  card: {
    margin: 30,
    marginTop: 15,
  },
  cardTitle: {
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  headacheImage: {
    width: 100,
    height: 100,
  },
});
