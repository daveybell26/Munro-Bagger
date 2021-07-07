import React, {
  useRef, useState, useEffect, useMemo,
} from 'react';
import {
  SafeAreaView, View, Platform,
} from 'react-native';
import MapView, {
  Polyline, PROVIDER_GOOGLE, UrlTile, Region, MapTypes,
} from 'react-native-maps';
import { Button } from 'react-native-elements';
import * as FileSystem from 'expo-file-system';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import AppConstants from '../constants/index';
import DownloadSettings from './DownloadSettings';
import styles from './styles/mapStyles';

const MAP_TYPE: MapTypes = Platform.OS === 'android' ? 'none' : 'standard';

const RouteMap = ({
  toggleMapVisibility,
  mountain,
} : {
  toggleMapVisibility : Function,
  mountain: MountainInfo
}) => {
  const mapView = useRef<MapView>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [visibilitySettings, setVisibilitySettings] = useState(false);

  const { Routes, Peak: { latitude, longitude } } = mountain;

  const initialRegion: Region = {
    latitude,
    longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  const [mapRegion, setMapRegion] = useState(initialRegion);
  const urlTemplate = useMemo(
    () => (isOffline
      ? `${AppConstants.TILE_FOLDER}/{z}/{x}/{y}.png`
      : `${AppConstants.MAP_URL}/{z}/{x}/{y}.png`),
    [isOffline],
  );

  const clearTiles = async () => {
    try {
      await FileSystem.deleteAsync(AppConstants.TILE_FOLDER);
      // eslint-disable-next-line no-alert
      alert('Deleted all tiles');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error);
    }
  };

  const toggleOffline = () => {
    setIsOffline(!isOffline);
  };

  const toggleDownloadSettings = () => {
    setVisibilitySettings(!visibilitySettings);
  };

  const onDownloadComplete = () => {
    setIsOffline(true);
    setVisibilitySettings(false);
  };

  const toggleOfflineText = isOffline ? 'Go online' : 'Go offline';

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      await Location.getCurrentPositionAsync({});
    })();
  }, []);

  const confineMap = () => {
    const northEast = { latitude: 59, longitude: -1 };
    const southWest = { latitude: 56, longitude: -7 };
    mapView.current?.setMapBoundaries(northEast, southWest);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <SafeAreaView style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          mapType={MAP_TYPE}
          ref={mapView}
          onMapReady={() => confineMap()}
          initialRegion={initialRegion}
          style={styles.map}
          showsUserLocation
          onRegionChange={setMapRegion}
        >
          <Polyline
            zIndex={2}
            coordinates={Routes}
            strokeColor="black"
            strokeWidth={3}
          />
          <UrlTile urlTemplate={urlTemplate} zIndex={1} />
        </MapView>
        <View style={styles.actionContainer}>
          <Button
            buttonStyle={styles.routeMapButton}
            raised
            title="Download"
            onPress={toggleDownloadSettings}
          />
          <Button
            buttonStyle={styles.routeMapButton}
            raised
            title="Clear tiles"
            onPress={clearTiles}
          />
          <Button
            buttonStyle={styles.routeMapButton}
            raised
            title={toggleOfflineText}
            onPress={toggleOffline}
          />
          <Button
            buttonStyle={styles.routeMapButton}
            raised
            title="Close Map"
            onPress={() => toggleMapVisibility()}
          />
        </View>

        {visibilitySettings && (
          <DownloadSettings mapRegion={mapRegion} onFinish={onDownloadComplete} />
        )}
      </SafeAreaView>
    </SafeAreaView>
  );
};
export default RouteMap;
