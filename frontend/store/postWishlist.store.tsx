/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postWishlist } from '../services/apiService';

export const postWishlistStatus = createAsyncThunk('wishlistStatusCreate/postWishlistStatus', async (MountainId: any) => {
  const { data } = await postWishlist(MountainId);
  return data;
});

interface WishlistStatusState {
  wishlistStatusObj: {}
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialWishlistStatusState: WishlistStatusState = {
  wishlistStatusObj: {},
  loading: 'idle',
};

const wishlistStatusCreateSlice = createSlice({
  name: 'wishlistStatusCreate',
  initialState: initialWishlistStatusState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postWishlistStatus.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(postWishlistStatus.fulfilled, (state, action) => {
      state.wishlistStatusObj = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(postWishlistStatus.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export default wishlistStatusCreateSlice.reducer;
