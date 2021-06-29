import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import NavFooter from '../Components/NavFooter';
import MapComponent from '../Components/MapComponent';
import Header from '../Components/Header';

const styles = StyleSheet.create({
  title: {
    marginTop: '20%',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Map = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header />
    <Text style={styles.title}>Map Screen</Text>
    <MapComponent />
    <NavFooter />
  </SafeAreaView>
);

export default Map;
