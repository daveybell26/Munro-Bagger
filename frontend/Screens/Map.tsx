import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NavFooter from '../Components/NavFooter';
import MapComponent from '../Components/MapComponent';
import Header from '../Components/Header';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBF2FA',
  },
});

const Map = () => (
  <SafeAreaView style={styles.safeArea}>
    <Header />
    <MapComponent />
    <NavFooter />
  </SafeAreaView>
);

export default Map;
