import axios from 'axios';
import { BACKEND_URL } from '@env';

const baseUrl = BACKEND_URL;

export const login = (email: string, jwtToken: string) => axios.post(
  `${baseUrl}/login`, { email }, {
    headers: { auth: `Bearer ${jwtToken}` },
  },
);

export const getRandomUserPics = (UserId: number, jwtToken: string) => axios.get(
  `${baseUrl}/me?UserId=${UserId}`, {
    headers: { auth: `Bearer ${jwtToken}` },
  },
);

export const getAllMountains = (UserId: number, jwtToken: string) => axios.get(`${baseUrl}/mountain?UserId=${UserId}`, {
  headers: { auth: `Bearer ${jwtToken}` },
});

export const getMountainById = (id: number, UserId: number, jwtToken: string) => axios.get(`${baseUrl}/mountain/${id}?UserId=${UserId}`, {
  headers: { auth: `Bearer ${jwtToken}` },
});

export const getExploreUnclimbed = (UserId: number, jwtToken: string) => axios.get(
  `${baseUrl}/explore/unclimbed?UserId=${UserId}`, {
    headers: { auth: `Bearer ${jwtToken}` },
  },
);

export const getExploreRandom = (jwtToken: string) => axios.get(`${baseUrl}/explore/random`, {
  headers: { auth: `Bearer ${jwtToken}` },
});

export const postPicture = (
  UserId: number,
  MountainId: number,
  imageUrl: string,
  jwtToken: string,
) => axios.post(
  `${baseUrl}/picture/mountain/${MountainId}/user/${UserId}`, { imageUrl }, {
    headers: { auth: `Bearer ${jwtToken}` },
  },
);

export const postClimbed = (UserId: number, MountainId: number, jwtToken: string) => axios.post(
  `${baseUrl}/status/climbed/${MountainId}?UserId=${UserId}`, {
    headers: { auth: `Bearer ${jwtToken}` },
  },
);
export const putClimbed = (id: number, bool: boolean, jwtToken: string) => axios.put(
  `${baseUrl}/status/${id}/climbed/${bool}`, {
    headers: { auth: `Bearer ${jwtToken}` },
  },
);

export const postWishlist = (UserId: number, MountainId: number, jwtToken: string) => axios.post(
  `${baseUrl}/status/wishlist/${MountainId}?UserId=${UserId}`, {
    headers: { auth: `Bearer ${jwtToken}` },
  },
);
export const putWishlist = (id: number, bool: boolean, jwtToken: string) => axios.put(
  `${baseUrl}/status/${id}/wishlist/${bool}`, {
    headers: { auth: `Bearer ${jwtToken}` },
  },
);
