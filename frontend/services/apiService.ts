import axios from 'axios';

const baseUrl = 'http://192.168.1.118:8080';

export const login = (email: string, jwtToken: string) => axios.post(
  `${baseUrl}/login`, { email }, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  },
);

export const getRandomUserPics = (UserId: number, jwtToken: string) => axios.get(
  `${baseUrl}/me?UserId=${UserId}`, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  },
);

export const getAllMountains = (UserId: number, jwtToken: string) => axios.get(`${baseUrl}/mountain?UserId=${UserId}`, {
  headers: { Authorization: `Bearer ${jwtToken}` },
});

export const getMountainById = (id: number, UserId: number, jwtToken: string) => axios.get(`${baseUrl}/mountain/${id}?UserId=${UserId}`, {
  headers: { Authorization: `Bearer ${jwtToken}` },
});

export const getExploreUnclimbed = (UserId: number, jwtToken: string) => axios.get(
  `${baseUrl}/explore/unclimbed?UserId=${UserId}`, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  },
);

export const getExploreRandom = (jwtToken: string) => axios.get(`${baseUrl}/explore/random`, {
  headers: { Authorization: `Bearer ${jwtToken}` },
});

export const postPicture = (
  UserId: number,
  MountainId: number,
  imageUrl: string,
  jwtToken: string,
) => axios.post(
  `${baseUrl}/picture/mountain/${MountainId}/user/${UserId}`, { imageUrl }, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  },
);

export const postClimbed = (UserId: number, MountainId: number, jwtToken: string) => axios.post(
  `${baseUrl}/status/climbed/${MountainId}?UserId=${UserId}`, {}, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  },
);
export const putClimbed = (id: number, bool: boolean, jwtToken: string) => axios.put(
  `${baseUrl}/status/${id}/climbed/${bool}`, {}, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  },
);

export const postWishlist = (UserId: number, MountainId: number, jwtToken: string) => axios.post(
  `${baseUrl}/status/wishlist/${MountainId}?UserId=${UserId}`, {}, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  },
);

export const putWishlist = (id: number, bool: boolean, jwtToken: string) => axios.put(
  `${baseUrl}/status/${id}/wishlist/${bool}`, {}, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  },
);
