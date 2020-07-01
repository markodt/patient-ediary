import React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LocalizationContext } from '../localization/localization';

export function BackButton() {
  const navigation = useNavigation();
  const { t } = React.useContext(LocalizationContext);
  return (
    <Button
      icon="arrow-left"
      uppercase={false}
      onPress={() => navigation.goBack()}
    >
      {t('header-backButton')}
    </Button>
  );
}

export function ExitButton() {
  const navigation = useNavigation();
  const { t } = React.useContext(LocalizationContext);
  return (
    <Button uppercase={false} onPress={() => navigation.navigate('h0')}>
      {t('header-exitButton')}
    </Button>
  );
}
