import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function DiaryCompleteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          style={styles.diaryCompleteImage}
          source={require('../../images/diary_complete.png')}
        />
      </View>
      <Text style={[styles.title, styles.centerText]}>
        Headache Diary Complete!
      </Text>
      <Text style={[styles.noteText, styles.centerText]}>
        Keep up the great work. Please tap “Finish” to confirm and save these
        answers, or tap “Back” to correct your answers.
      </Text>
      <View style={styles.bottomSection}>
        <Button
          mode="contained"
          uppercase={false}
          onPress={() => navigation.navigate('h0')}
        >
          Finish
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  centerText: {
    textAlign: 'center',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  diaryCompleteImage: {
    width: 230,
    height: 164,
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 20,
  },
  noteText: {
    fontSize: 16,
    color: '#757575',
    marginHorizontal: 50,
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
