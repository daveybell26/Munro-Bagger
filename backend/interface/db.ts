/* eslint-disable @typescript-eslint/no-unused-vars */
interface UserInterface {
  email: string;
  imageUrl: string;
}

interface StatusInterface {
  wishlist: boolean;
  climbed: boolean;
}

interface MountainInterface {
  name: string;
  imageUrl: string;
}

interface PictureInterface {
  imageUrl: string;
}

interface PeakInterface {
  latitude: number;
  longitude: number;
  elevation: number;
}
interface StartpointInterface {
  latitude: number;
  longitude: number;
}
interface RouteInterface {
  latitude: number;
  longitude: number;
}
