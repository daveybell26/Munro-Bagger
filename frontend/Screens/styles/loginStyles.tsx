/* eslint-disable global-require */

import { StyleSheet } from 'react-native';

import * as Font from 'expo-font';

Font.loadAsync({
  NunitoSemiBold: require('../../assets/fonts/Nunito-SemiBold.ttf'),
  NunitoExtraBold: require('../../assets/fonts/Nunito-ExtraBold.ttf'),
  NunitoItalicRegular: require('../../assets/fonts/Nunito-Italic.ttf'),
  NunitoBold: require('../../assets/fonts/Nunito-Bold.ttf'),
  NunitoBlack: require('../../assets/fonts/Nunito-Black.ttf'),
  NunitoRegular: require('../../assets/fonts/Nunito-Regular.ttf'),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.5)',

  },
  textHeader: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',

    // fontFamily: 'NunitoBold',
    fontSize: 30,
  },
  textDescription: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  textArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export default styles;
