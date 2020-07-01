import React from 'react';
import { View, Text, Platform, StatusBar, StyleSheet } from 'react-native';
import { LocalizationContext } from '../localization/localization';

export default function AlertsScreen() {
  const { t } = React.useContext(LocalizationContext);
  return (
    <View style={styles.container}>
      <Text>{t('alerts-label')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
