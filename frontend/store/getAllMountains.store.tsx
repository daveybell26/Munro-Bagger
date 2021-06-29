import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllMountains } from '../services/apiService';

const callBack = async () => {
  const { data } = await getAllMountains();
  return data;
};

export const getMountains = createAsyncThunk('allMountains/getMountains', callBack);

const initialMountainState = {
  mountainList: [],
  status: 'this is not running',
};

const allMountainsSlice = createSlice({
  name: 'allMountains',
  initialState: initialMountainState,
  reducers: {},
  extraReducers: {
    [getMountains.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getMountains.fulfilled]: (state, action) => {
      state.mountainList = action.payload;
      state.status = 'success';
    },
    [getMountains.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default allMountainsSlice.reducer;
