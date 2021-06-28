import React from 'react';
import { View, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles/mapStyles';
import { getAllMountains } from '../mockMunros.json';

const listOfMarkers = getAllMountains.map((location) => {
  const markerLocation = {
    latitude: location.Peak.latitude,
    longitude: location.Peak.longitude,
  };

  return (
    <Marker
      onPress={() => Alert.alert(location.name)}
      key={location.id}
      coordinate={markerLocation}
      // eslint-disable-next-line global-require
      icon={require('../assets/greenHiker.png')}
    />
  );
});

const Map = () => (
  <View style={styles.container}>
    <Text>Munros Map</Text>
    <MapView
      region={{
        latitude: 57.3017,
        longitude: -4.60763,
        latitudeDelta: 4.5,
        longitudeDelta: 1,
      }}
      style={styles.map}
    >
      {listOfMarkers}
    </MapView>
  </View>
);

export default Map;
