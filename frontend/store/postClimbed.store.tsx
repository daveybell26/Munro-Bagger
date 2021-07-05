/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postClimbed } from '../services/apiService';

export const postClimbedStatus = createAsyncThunk('climbedStatusCreate/postClimbedStatus', async ({ userId, id }: { userId: number, id: number }) => {
  const { data } = await postClimbed(userId, id);
  return data;
});

interface ClimbedStatusState {
  climbedStatusObj: {}
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialClimbedStatusState: ClimbedStatusState = {
  climbedStatusObj: {},
  loading: 'idle',
};

const climbedStatusCreateSlice = createSlice({
  name: 'climbedStatusCreate',
  initialState: initialClimbedStatusState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postClimbedStatus.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(postClimbedStatus.fulfilled, (state, action) => {
      state.climbedStatusObj = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(postClimbedStatus.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export default climbedStatusCreateSlice.reducer;
