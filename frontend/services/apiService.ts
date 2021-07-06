import axios from 'axios';
import { BACKEND_URL } from '@env';

const baseUrl = BACKEND_URL;

export const login = (email: string) => axios.post(
  `${baseUrl}/login`, { email },
);

export const getRandomUserPics = (UserId: number) => axios.get(
  `${baseUrl}/me?UserId=${UserId}`,
);

export const getAllMountains = (UserId: number) => axios.get(`${baseUrl}/mountain?UserId=${UserId}`);

export const getMountainById = (id: number, UserId: number) => axios.get(`${baseUrl}/mountain/${id}?UserId=${UserId}`);

export const getExploreUnclimbed = (UserId: number) => axios.get(
  `${baseUrl}/explore/unclimbed?UserId=${UserId}`,
);

export const getExploreRandom = () => axios.get(`${baseUrl}/explore/random`);

export const postPicture = (UserId: number, MountainId: number, imageUrl: string) => axios.post(
  `${baseUrl}/picture/mountain/${MountainId}/user/${UserId}`, { imageUrl },
);

export const postClimbed = (UserId: number, MountainId: number) => axios.post(
  `${baseUrl}/status/climbed/${MountainId}?UserId=${UserId}`,
);
export const putClimbed = (id: number, bool: boolean) => axios.put(
  `${baseUrl}/status/${id}/climbed/${bool}`,
);

export const postWishlist = (UserId: number, MountainId: number) => axios.post(
  `${baseUrl}/status/wishlist/${MountainId}?UserId=${UserId}`,
);
export const putWishlist = (id: number, bool: boolean) => axios.put(
  `${baseUrl}/status/${id}/wishlist/${bool}`,
);
