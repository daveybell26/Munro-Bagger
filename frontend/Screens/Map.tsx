import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles/mapStyles';

const Map = () => (
  <View style={styles.container}>
    <Text>Munros Map</Text>
    <MapView style={styles.map} />
  </View>
);

export default Map;
