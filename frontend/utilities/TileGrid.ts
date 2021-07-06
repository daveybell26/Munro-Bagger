import { Region } from 'react-native-maps';

export type Tile = {
  x: number
  y: number
  z: number
};

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function lonToTileX(lon: number, zoom: number): number {
  return Math.floor(((lon + 180) / 360) * (2 ** zoom));
}

function latToTileY(lat: number, zoom: number): number {
  return Math.floor(
    ((1
      - Math.log(Math.tan(degToRad(lat)) + 1 / Math.cos(degToRad(lat))) / Math.PI)
      / 2)

      * (2 ** zoom),
  );
}

function tilesForZoom(region: Region, zoom: number): Tile[] {
  const minLon = region.longitude - region.longitudeDelta;
  const minLat = region.latitude - region.latitudeDelta;
  const maxLon = region.longitude + region.longitudeDelta;
  const maxLat = region.latitude + region.latitudeDelta;

  const minTileX = lonToTileX(minLon, zoom);
  const maxTileX = lonToTileX(maxLon, zoom);
  const minTileY = latToTileY(maxLat, zoom);
  const maxTileY = latToTileY(minLat, zoom);

  const tiles: Tile[] = [];

  for (let x = minTileX; x <= maxTileX; x += 1) {
    for (let y = minTileY; y <= maxTileY; y += 1) {
      tiles.push({ x, y, z: zoom });
    }
  }

  return tiles;
}

export function tileGridForRegion(
  region: Region,
  minZoom: number,
  maxZoom: number,
): Tile[] {
  let tiles: Tile[] = [];

  for (let zoom = minZoom; zoom <= maxZoom; zoom += 1) {
    const subTiles = tilesForZoom(region, zoom);
    tiles = [...tiles, ...subTiles];
  }

  return tiles;
}
