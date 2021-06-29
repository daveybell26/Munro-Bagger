/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMountainById } from '../services/apiService';

export const getOneMountain = createAsyncThunk('oneMountain/getOneMountain', async () => {
  // TODO: make getMountainById parameter dynamic
  const { data } = await getMountainById(1);
  return data;
});

interface MountainState {
  mountain: {}
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialMountainState: MountainState = {
  mountain: {},
  loading: 'idle',
};

const oneMountainSlice = createSlice({
  name: 'oneMountain',
  initialState: initialMountainState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOneMountain.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getOneMountain.fulfilled, (state, action) => {
      state.mountain = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(getOneMountain.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export default oneMountainSlice.reducer;
