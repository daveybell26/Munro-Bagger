/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postWishlist } from '../services/apiService';

export const postWishlistStatus = createAsyncThunk('wishlistStatusCreate/postWishlistStatus', async ({ userId, id }: { userId: number, id: number }) => {
  const { data } = await postWishlist(userId, id);
  return data;
});

interface WishlistStatusState {
  wishlistStatusObj: {}
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialWishlistStatusState = {
  wishlistStatusObj: {},
  loading: 'idle',
} as WishlistStatusState;

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
