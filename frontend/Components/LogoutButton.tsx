import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  StyleSheet, SafeAreaView, TouchableOpacity,
} from 'react-native';

import { useAppDispatch } from '../store';
import { deleteState } from '../store/login.store';

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
    alignContent: 'center',
    backgroundColor: '#427AA1',
    marginBottom: -20,
  },
  buttonLogo: {
    color: 'black',
    alignContent: 'center',
  },
});

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(deleteState());
  };
  return (

    <SafeAreaView style={styles.button}>
      <TouchableOpacity onPress={logout}>
        <MaterialCommunityIcons name="logout-variant" size={35} style={styles.buttonLogo} />
      </TouchableOpacity>
    </SafeAreaView>

  );
};

export default LogoutButton;
