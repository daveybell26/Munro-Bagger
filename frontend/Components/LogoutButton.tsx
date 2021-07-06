import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  SafeAreaView, TouchableOpacity,
} from 'react-native';
import styles from './styles/logoutButtonStyles';

import { useAppDispatch } from '../store';
import { deleteState } from '../store/login.store';

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
