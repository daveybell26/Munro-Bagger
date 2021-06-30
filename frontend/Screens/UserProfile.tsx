import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
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

const UserProfile = () => (
  <SafeAreaView style={styles.safeArea}>
    <Header />
    <Text style={styles.title}>User Profile Screen</Text>
    <NavFooter />
  </SafeAreaView>
);

export default UserProfile;
