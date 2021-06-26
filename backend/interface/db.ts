/* eslint-disable @typescript-eslint/no-unused-vars */
interface UserInterface {
  email: string;
  imageURL: string;
}

interface StatusInterface {
  whishlist: boolean;
  climbed: boolean;
}

interface MountainInterface {
  name: string;
  imageURL: string;
}

interface PictureInterface {
  imageURL: string;
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
