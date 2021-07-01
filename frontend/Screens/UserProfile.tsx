import React from 'react';
import {
  SafeAreaView, StyleSheet, Text,
} from 'react-native';
import { useHistory } from 'react-router-native';
import { MaterialIcons } from '@expo/vector-icons';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    flex: 1,
    marginTop: '20%',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const UserProfile = () => {
  const history = useHistory();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <MaterialIcons name="photo-camera" size={35} onPress={() => history.push('/camera')} />
      <Text style={styles.title}>User Profile Screen</Text>
      <NavFooter />
    </SafeAreaView>
  );
};

export default UserProfile;
