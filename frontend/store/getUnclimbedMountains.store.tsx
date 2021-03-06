/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getExploreUnclimbed } from '../services/apiService';

export const getExploreUnclimbedMountains = createAsyncThunk('unclimbedMountains/getExploreUnclimbedMountains', async ({ userId, jwtToken }:{ userId: number, jwtToken: string }) => {
  const { data } = await getExploreUnclimbed(userId, jwtToken);
  return data;
});

interface UnclimbedMountainsListState {
  unclimbedMountainsList: UnclimbedMountain[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialUnclimbedMountainsState = {
  unclimbedMountainsList: [],
  loading: 'idle',
} as UnclimbedMountainsListState;

const unclimbedMountainsSlice = createSlice({
  name: 'unclimbedMountains',
  initialState: initialUnclimbedMountainsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExploreUnclimbedMountains.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getExploreUnclimbedMountains.fulfilled, (state, action) => {
      state.unclimbedMountainsList = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(getExploreUnclimbedMountains.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export default unclimbedMountainsSlice.reducer;
