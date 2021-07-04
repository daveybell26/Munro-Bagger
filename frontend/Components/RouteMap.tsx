import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './styles/mapStyles';
import NavFooter from './NavFooter';
import Header from './Header';

const RouteMap = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userLocation, setLocation] = useState<Location.LocationObject>();
  const mapView = useRef<MapView>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const confineMap = () => {
    const northEast = { latitude: 59, longitude: -1 };
    const southWest = { latitude: 56, longitude: -7 };
    mapView.current?.setMapBoundaries(northEast, southWest);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <SafeAreaView style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          mapType="terrain"
          ref={mapView}
          onMapReady={() => confineMap()}
          initialRegion={{
            latitude: 56.17,
            longitude: -4.63301,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          style={styles.map}
          showsUserLocation
        >
          <Polyline
            coordinates={[

              { latitude: 56.149528709339, longitude: -4.6420955523643 },
              { latitude: 56.152639871854, longitude: -4.6353042229788 },
              { latitude: 56.158757201152, longitude: -4.6202616563449 },
              { latitude: 56.164020086746, longitude: -4.6157877749323 },
              { latitude: 56.169724913977, longitude: -4.6180286319063 },
              { latitude: 56.178932505124, longitude: -4.6203881658375 },
              { latitude: 56.187306648661, longitude: -4.6239008342587 },
              { latitude: 56.18847453615, longitude: -4.6302667415865 },
              { latitude: 56.19021294627, longitude: -4.6330454213062 },
              { latitude: 56.191834255138, longitude: -4.6392014707877 },
              { latitude: 56.189323304818, longitude: -4.6431392256968 },
              { latitude: 56.18814288478, longitude: -4.645798107291 },
              { latitude: 56.184030044961, longitude: -4.6468847790002 },
              { latitude: 56.175351944852, longitude: -4.6429033873697 },
              { latitude: 56.165058208471, longitude: -4.638812969313 },
              { latitude: 56.159319824638, longitude: -4.6423653098655 },
              { latitude: 56.156584238053, longitude: -4.642096903143 },
              { latitude: 56.152718199784, longitude: -4.6421535127197 },
              { latitude: 56.149621037603, longitude: -4.6419811255503 },

            ]}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#7F0000',
              '#E5845C',
              '#238C23',
            ]}
            strokeWidth={6}
          />
        </MapView>
      </SafeAreaView>
      <NavFooter />
    </SafeAreaView>
  );
};
export default RouteMap;
