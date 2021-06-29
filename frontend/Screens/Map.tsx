import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import NavFooter from '../Components/NavFooter';
import MapComponent from '../Components/MapComponent';

const Map = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text>Map Screen</Text>
    <MapComponent />
    <NavFooter />
  </SafeAreaView>
);

export default Map;
