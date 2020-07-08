import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import moment from 'moment';
import { setLastEntryDate } from '../redux/actions';
import { getResponses } from '../redux/selectors';
import { LocalizationContext } from '../localization/localization';
import { storeData } from '../storage/LocalStorage';

function DiaryCompleteScreen({ navigation, responses }) {
  const { t } = React.useContext(LocalizationContext);

  const handleFinishButtonPress = () => {
    const lastEntryDate = moment.utc().format();
    setLastEntryDate(lastEntryDate);
    storeData('lastEntryDate', lastEntryDate);
    navigation.navigate('h0');
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          style={styles.diaryCompleteImage}
          source={require('../../images/diary_complete.png')}
        />
      </View>
      <Text style={[styles.title, styles.centerText]}>
        {t('diaryComplete-title')}
      </Text>
      <Text style={[styles.noteText, styles.centerText]}>
        {t('diaryComplete-noteText')}
      </Text>
      <View style={styles.bottomSection}>
        <Button
          mode="contained"
          uppercase={false}
          onPress={handleFinishButtonPress}
        >
          {t('navigation-finishButton')}
        </Button>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  const responses = getResponses(state);
  return { responses };
};

export default connect(mapStateToProps)(DiaryCompleteScreen);

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
