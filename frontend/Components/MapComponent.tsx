import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useHistory } from 'react-router-native';
import { styles, customMap } from './styles/mapStyles';
import { getAllMountains } from '../mockMunros.json';
import GreenMountain from '../assets/greenMountain.png';
import RedMountain from '../assets/redMountain.png';

const MapComponent = () => {
  const listOfMarkers = getAllMountains.map((location) => {
    const history = useHistory();
    const markerLocation = {
      latitude: location.Peak.latitude,
      longitude: location.Peak.longitude,
    };

    return (
      <Marker
        onPress={() => history.push(`/mountain/${location.id}`)}
        key={location.id}
        coordinate={markerLocation}
        icon={location.Statuses[0].climbed ? GreenMountain : RedMountain}
      >
        <Callout>
          <Text>{location.name}</Text>
        </Callout>
      </Marker>
    );
  });

  return (
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
};

export default MapComponent;
