/* eslint-disable global-require */
import * as Font from 'expo-font';

import { StyleSheet } from 'react-native';

Font.loadAsync({
  NunitoSemiBold: require('../../assets/fonts/Nunito-SemiBold.ttf'),
  NunitoExtraBold: require('../../assets/fonts/Nunito-ExtraBold.ttf'),
  NunitoItalicRegular: require('../../assets/fonts/Nunito-Italic.ttf'),
  NunitoBold: require('../../assets/fonts/Nunito-Bold.ttf'),
  NunitoBlack: require('../../assets/fonts/Nunito-Black.ttf'),
  NunitoRegular: require('../../assets/fonts/Nunito-Regular.ttf'),
});

export const globalStyles = StyleSheet.create({

  header: {
    fontFamily: 'NunitoRegular',
    fontSize: 30,
  },
  stats: {
    fontFamily: 'NunitoItalicRegular',
  },
  subHeaders: {
    fontFamily: 'NunitoBlack',
    textAlign: 'center',
    fontSize: 20,
  },

});

export default globalStyles;
