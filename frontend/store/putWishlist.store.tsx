/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { putWishlist } from '../services/apiService';

export const putWishlistStatus = createAsyncThunk('wishlistStatusUpdate/putWishlistStatus', async ({ id, bool }: any) => {
  const { data } = await putWishlist(id, bool);
  return data;
});

interface WishlistStatusState {
  wishlistStatusArr: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialWishlistStatusState: WishlistStatusState = {
  wishlistStatusArr: [],
  loading: 'idle',
};

const wishlistStatusUpdateSlice = createSlice({
  name: 'wishlistStatusUpdate',
  initialState: initialWishlistStatusState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(putWishlistStatus.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(putWishlistStatus.fulfilled, (state, action) => {
      state.wishlistStatusArr = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(putWishlistStatus.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export default wishlistStatusUpdateSlice.reducer;
