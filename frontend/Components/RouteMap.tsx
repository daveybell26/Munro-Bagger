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
import AppConstants from '../constants/index';
import DownloadSettings from './DownloadSettings';
import styles from './styles/mapStyles';

const MAP_TYPE: MapTypes = Platform.OS === 'android' ? 'none' : 'standard';

const initialRegion: Region = {
  latitude: 56.17,
  longitude: -4.63301,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

const RouteMap = ({ toggleMapVisibility } : { toggleMapVisibility : Function }) => {
  const mapView = useRef<MapView>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [visibilitySettings, setVisibilitySettings] = useState(false);
  const [mapRegion, setMapRegion] = useState(initialRegion);

  const urlTemplate = useMemo(
    () => (isOffline
      ? `${AppConstants.TILE_FOLDER}/{z}/{x}/{y}.png`
      : `${AppConstants.MAP_URL}/{z}/{x}/{y}.png`),
    [isOffline],
  );

  async function clearTiles() {
    try {
      await FileSystem.deleteAsync(AppConstants.TILE_FOLDER);
      // eslint-disable-next-line no-alert
      alert('Deleted all tiles');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error);
    }
  }

  function toggleOffline() {
    setIsOffline(!isOffline);
  }

  function toggleDownloadSettings() {
    setVisibilitySettings(!visibilitySettings);
  }

  function onDownloadComplete() {
    setIsOffline(true);
    setVisibilitySettings(false);
  }

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
            coordinates={[

              { latitude: 56.151961903, longitude: -4.641430812 },
              { latitude: 56.151444057, longitude: -4.640429074 },
              { latitude: 56.151297229, longitude: -4.638889232 },
              { latitude: 56.151889086, longitude: -4.637480579 },
              { latitude: 56.152255697, longitude: -4.636096701 },
              { latitude: 56.153199522, longitude: -4.633987429 },
              { latitude: 56.153830906, longitude: -4.631776153 },
              { latitude: 56.154526137, longitude: -4.629730213 },
              { latitude: 56.154909107, longitude: -4.628629112 },
              { latitude: 56.155550188, longitude: -4.628069021 },
              { latitude: 56.156378067, longitude: -4.625065699 },
              { latitude: 56.156647101, longitude: -4.62403725 },
              { latitude: 56.15696271, longitude: -4.622931439 },
              { latitude: 56.15734756, longitude: -4.622796642 },
              { latitude: 56.158520655, longitude: -4.620460821 },
              { latitude: 56.160149538, longitude: -4.618880685 },
              { latitude: 56.160669595, longitude: -4.617667856 },
              { latitude: 56.161933758, longitude: -4.617391527 },
              { latitude: 56.163349589, longitude: -4.616320125 },
              { latitude: 56.164493608, longitude: -4.615350964 },
              { latitude: 56.165530837, longitude: -4.615179909 },
              { latitude: 56.166469797, longitude: -4.615404884 },
              { latitude: 56.167278393, longitude: -4.615419632 },
              { latitude: 56.167887608, longitude: -4.615299993 },
              { latitude: 56.169231849, longitude: -4.617606604 },
              { latitude: 56.171689976, longitude: -4.619304594 },
              { latitude: 56.172905251, longitude: -4.620273569 },
              { latitude: 56.175135315, longitude: -4.621070143 },
              { latitude: 56.177429887, longitude: -4.620944683 },
              { latitude: 56.17845578, longitude: -4.620249251 },
              { latitude: 56.178948546, longitude: -4.620323143 },
              { latitude: 56.17942509, longitude: -4.621161364 },
              { latitude: 56.180198665, longitude: -4.622825616 },
              { latitude: 56.181146373, longitude: -4.623696075 },
              { latitude: 56.182140445, longitude: -4.623441655 },
              { latitude: 56.183906142, longitude: -4.623884567 },
              { latitude: 56.185633802, longitude: -4.624002582 },
              { latitude: 56.186359693, longitude: -4.624737158 },
              { latitude: 56.186830662, longitude: -4.623721702 },
              { latitude: 56.186987722, longitude: -4.62373243 },
              { latitude: 56.187465952, longitude: -4.624490399 },
              { latitude: 56.187741585, longitude: -4.6263225 },
              { latitude: 56.187958441, longitude: -4.627747656 },
              { latitude: 56.188342785, longitude: -4.629748432 },
              { latitude: 56.187958441, longitude: -4.627747656 },
              { latitude: 56.188342785, longitude: -4.629748432 },
              { latitude: 56.188637196, longitude: -4.630695395 },
              { latitude: 56.189084373, longitude: -4.631854321 },
              { latitude: 56.189586705, longitude: -4.632533494 },
              { latitude: 56.190222796, longitude: -4.633262154 },

            ]}
            strokeColor="black"
            strokeWidth={3}
          />
          <UrlTile urlTemplate={urlTemplate} zIndex={1} />
        </MapView>
        <View style={styles.actionContainer}>
          <Button raised title="Download" onPress={toggleDownloadSettings} />
          <Button raised title="Clear tiles" onPress={clearTiles} />
          <Button raised title={toggleOfflineText} onPress={toggleOffline} />
          <Button raised title="Close Map" onPress={() => toggleMapVisibility()} />
        </View>

        {visibilitySettings && (
          <DownloadSettings mapRegion={mapRegion} onFinish={onDownloadComplete} />
        )}
      </SafeAreaView>
    </SafeAreaView>
  );
};
export default RouteMap;
