import React from 'react';
import { SafeAreaView } from 'react-native';
import NavFooter from '../Components/NavFooter';
import MapComponent from '../Components/MapComponent';
import Header from '../Components/Header';
import styles from './styles/mapStyles';

const Map = () => (
  <SafeAreaView style={styles.safeArea}>
    <Header />
    <MapComponent />
    <NavFooter />
  </SafeAreaView>
);

export default Map;
