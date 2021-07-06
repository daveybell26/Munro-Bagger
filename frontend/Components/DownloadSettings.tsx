import React, { useState, useMemo } from 'react';
import { Text, Slider, ActivityIndicator } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Card, Button } from 'react-native-elements';
import { Region } from 'react-native-maps';
import { tileGridForRegion } from '../utilities/TileGrid';
import AppConstants from '../constants';
import styles from './styles/downloadSettingsStyles';

const DownloadSettings = ({
  mapRegion,
  onFinish,
} : {
  mapRegion: Region,
  onFinish: Function
}) => {
  const [numZoomLevels, setZoomLevels] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function calcZoom(longitudeDelta: number) {
    return Math.round(Math.log(360 / longitudeDelta) / Math.LN2);
  }

  const currentZoom = useMemo(() => {
    const zoom = calcZoom(mapRegion.longitudeDelta);
    return zoom;
  }, [mapRegion]);

  async function fetchTiles() {
    setIsLoading(true);

    const minZoom = currentZoom;
    const maxZoom = currentZoom + numZoomLevels;

    const tiles = tileGridForRegion(mapRegion, minZoom, maxZoom);

    // eslint-disable-next-line no-restricted-syntax
    for (const tile of tiles) {
      const folder = `${AppConstants.TILE_FOLDER}/${tile.z}/${tile.x}`;
      // eslint-disable-next-line no-await-in-loop
      await FileSystem.makeDirectoryAsync(folder, { intermediates: true });
    }

    const BATCH_SIZE = 100;

    let batch = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const tile of tiles) {
      const fetchUrl = `${AppConstants.MAP_URL}/${tile.z}/${tile.x}/${tile.y}.png`;
      const localLocation = `${AppConstants.TILE_FOLDER}/${tile.z}/${tile.x}/${tile.y}.png`;
      const tilePromise = FileSystem.downloadAsync(fetchUrl, localLocation);
      batch.push(tilePromise);

      if (batch.length >= BATCH_SIZE) {
        // eslint-disable-next-line no-await-in-loop
        await Promise.all(batch);
        batch = [];
      }
    }

    await Promise.all(batch);

    // eslint-disable-next-line no-alert
    alert('Finished downloading tiles, you are now viewing the offline map.');

    setIsLoading(false);
    onFinish();
  }

  return (
    <Card
      containerStyle={styles.container}
    >
      <Card.Title>Select number of zoom levels to download</Card.Title>
      <Text style={styles.warningMessage}>
        Warning! Selecting a high detail level will take up more space.
      </Text>

      <Slider
        style={{
          marginBottom: 30,
          marginTop: 30,
        }}
        step={1}
        minimumValue={1}
        maximumValue={4}
        onValueChange={setZoomLevels}
      />

      {isLoading && <ActivityIndicator />}
      {!isLoading && <Button raised title="Download tiles" onPress={fetchTiles} />}
    </Card>
  );
};

export default DownloadSettings;
