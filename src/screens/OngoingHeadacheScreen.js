import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { LocalizationContext } from '../localization/i18n';

export default function OngoingHeadacheScreen({ navigation }) {
  const { t } = React.useContext(LocalizationContext);
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          style={styles.headacheImage}
          source={require('../../images/headache1_big.png')}
        />
      </View>
      <Text style={[styles.title, styles.centerText]}>
        {t('ongoingHeadache-title')}
      </Text>
      <Text style={[styles.noteText, styles.centerText]}>
        {t('ongoingHeadache-noteText')}
      </Text>
      <View style={styles.bottomSection}>
        <Button
          mode="contained"
          uppercase={false}
          onPress={() => navigation.navigate('h0')}
        >
          {t('navigation-returnHomeButton')}
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
  headacheImage: {
    width: 160,
    height: 160,
    marginTop: 30,
    marginBottom: 25,
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
