/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { putClimbed } from '../services/apiService';

export const putClimbedStatus = createAsyncThunk('climbedStatusUpdate/putClimbedStatus', async ({ id, bool }: any) => {
  const { data } = await putClimbed(id, bool);
  return data;
});

interface ClimbedStatusState {
  climbedStatusArr: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialClimbedStatusState: ClimbedStatusState = {
  climbedStatusArr: [],
  loading: 'idle',
};

const climbedStatusUpdateSlice = createSlice({
  name: 'climbedStatusUpdate',
  initialState: initialClimbedStatusState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(putClimbedStatus.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(putClimbedStatus.fulfilled, (state, action) => {
      state.climbedStatusArr = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(putClimbedStatus.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export default climbedStatusUpdateSlice.reducer;
