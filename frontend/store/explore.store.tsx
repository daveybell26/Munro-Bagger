/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '.';
import { getExploreRandom } from '../services/apiService';

export const getRandomMountains = createAsyncThunk('randomMountains/getRandomMountains', async () => {
  const { data } = await getExploreRandom();
  return data;
});

interface RandomMountainsListState {
  randomMountainsList: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialRandomMountainsState: RandomMountainsListState = {
  randomMountainsList: [],
  loading: 'idle',
};

const randomMountainsSlice = createSlice({
  name: 'randomMountains',
  initialState: initialRandomMountainsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomMountains.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getRandomMountains.fulfilled, (state, action) => {
      state.randomMountainsList = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(getRandomMountains.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export const randomMountainSelector = (state: RootState) => state.exploreRandomMountains;

export default randomMountainsSlice.reducer;
