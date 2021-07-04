import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import mountainsReducer from './getAllMountains.store';
import oneMountainReducer from './getOneMountain.store';
import randomUserPicsReducer from './getRandomUserPics.store';
import loginReducer from './login.store';
import exploreMountainsReducer from './explore.store';
import unclimbedMountainsReducer from './getUnclimbedMountains.store';

const store = configureStore({
  reducer: {
    allMountains: mountainsReducer,
    oneMountain: oneMountainReducer,
    randomUserPics: randomUserPicsReducer,
    login: loginReducer,
    exploreRandomMountains: exploreMountainsReducer,
    unclimbedMountains: unclimbedMountainsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const allMountainSelector = (state: RootState) => state.allMountains;
export const oneMountainSelector = (state: RootState) => state.oneMountain;
export const randomUserPicsSelector = (state: RootState) => state.randomUserPics;
export const loginSelector = (state: RootState) => state.login;
export const unclimbedMountainsSelector = (state: RootState) => state.unclimbedMountains;
export const randomMountainSelector = (state: RootState) => state.exploreRandomMountains;

export default store;
