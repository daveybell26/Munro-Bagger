import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMountainById } from '../services/apiService';

export const getOneMountain = createAsyncThunk('oneMountain/getOneMountain', async () => {
  // TODO: make getMountainById parameter dynamic
  const { data } = await getMountainById(1);
  return data;
});

const initialMountainState = {
  mountain: {},
  status: null,
};

const oneMountainSlice = createSlice({
  name: 'oneMountain',
  initialState: initialMountainState,
  reducers: {},
  extraReducers: {
    [getOneMountain.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getOneMountain.fulfilled]: (state, action) => {
      state.mountain = action.payload;
      state.status = 'success';
    },
    [getOneMountain.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default oneMountainSlice.reducer;
