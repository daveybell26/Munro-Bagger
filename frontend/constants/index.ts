import * as FileSystem from 'expo-file-system';

const AppConstants = {
  TILE_FOLDER: `${FileSystem.documentDirectory}tiles`,
  MAP_URL: 'https://c.tile.opentopomap.org',
};

export default AppConstants;
