import axios from 'axios';
import { BACKEND_URL } from '@env';

const baseUrl = 'http://192.168.0.55:8080';

export const login = (email: string) => axios.post(
  `${baseUrl}/login`, { email },
);

export const getRandomUserPics = (UserId: number) => axios.get(
  `${baseUrl}/me?UserId=${UserId}`,
);

export const getAllMountains = () => axios.get(`${baseUrl}/mountain`);

export const getMountainById = (id: number) => axios.get(`${baseUrl}/mountain/${id}`);

export const getExploreUnclimbed = (UserId: number) => axios.get(
  `${baseUrl}/explore/unclimbed?UserId=${UserId}`,
);

export const getExploreRandom = () => axios.get(`${baseUrl}/explore/random`);
