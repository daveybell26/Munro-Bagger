import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import mountainsReducer from './getAllMountains.store';
import oneMountainReducer from './getOneMountain.store';
import randomUserPicsReducer from './getRandomUserPics.store';

const store = configureStore({
  reducer: {
    allMountains: mountainsReducer,
    oneMountain: oneMountainReducer,
    randomUserPics: randomUserPicsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export default store;