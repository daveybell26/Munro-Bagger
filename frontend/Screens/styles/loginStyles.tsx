/* eslint-disable global-require */

import { StyleSheet } from 'react-native';

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
