/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '.';
import { getAllMountains } from '../services/apiService';

export const getMountains = createAsyncThunk('allMountains/getMountains', async () => {
  const { data } = await getAllMountains();
  return data;
});

interface MountainListState {
  mountainList: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialMountainState: MountainListState = {
  mountainList: [],
  loading: 'idle',
};

const allMountainsSlice = createSlice({
  name: 'allMountains',
  initialState: initialMountainState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMountains.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getMountains.fulfilled, (state, action) => {
      state.mountainList = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(getMountains.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export const allMountainSelector = (state: RootState) => state.allMountains;

export default allMountainsSlice.reducer;
