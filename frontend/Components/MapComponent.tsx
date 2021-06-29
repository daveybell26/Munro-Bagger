import React from 'react';
import { View, Text, Alert } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { styles, customMap } from './styles/mapStyles';
import { getAllMountains } from '../mockMunros.json';
import GreenTriangle from '../assets/greenTriangle.png';
import RedTriangle from '../assets/redTriangle.png';

const listOfMarkers = getAllMountains.map((location) => {
  const markerLocation = {
    latitude: location.Peak.latitude,
    longitude: location.Peak.longitude,
  };

  return (
    <Marker
      // onPress={() => Alert.alert(location.name)}
      key={location.id}
      coordinate={markerLocation}
      icon={location.Statuses[0].climbed ? GreenTriangle : RedTriangle}
    >
      <Callout>
        <Text>{location.name}</Text>
      </Callout>
    </Marker>
  );
});

const MapComponent = () => (
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
      customMapStyle={customMap}
    >
      {listOfMarkers}
    </MapView>
  </View>
);

export default MapComponent;
