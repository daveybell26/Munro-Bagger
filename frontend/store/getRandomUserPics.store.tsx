import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRandomUserPics } from '../services/apiService';

export const getUserPicsRandomly = createAsyncThunk('randomUserPics/getUserPicsRandomly', async () => {
  // TODO: make getMountainById parameter dynamic
  const { data } = await getRandomUserPics();
  return data;
});

const initialRandomPictureState = {
  pictures: {},
  status: null,
};

const randomUserPicsSlice = createSlice({
  name: 'randomUserPics',
  initialState: initialRandomPictureState,
  reducers: {},
  extraReducers: {
    [getUserPicsRandomly.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getUserPicsRandomly.fulfilled]: (state, action) => {
      state.pictures = action.payload;
      state.status = 'success';
    },
    [getUserPicsRandomly.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default randomUserPicsSlice.reducer;
