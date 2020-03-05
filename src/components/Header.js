import React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export function BackButton() {
  const navigation = useNavigation();
  return (
    <Button
      icon="arrow-left"
      uppercase={false}
      onPress={() => navigation.goBack()}
    >
      Back
    </Button>
  );
}

export function ExitButton() {
  const navigation = useNavigation();
  return (
    <Button uppercase={false} onPress={() => navigation.navigate('h0')}>
      Exit
    </Button>
  );
}
