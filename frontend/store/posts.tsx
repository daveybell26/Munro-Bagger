import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk('posts/getPosts', () => axios.get('https://jsonplaceholder.typicode.com/posts'));

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'success';
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// const postsSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     list: [],
//     status: null,
//   },
//   reducers: {
//     increment (state) {
//       state.counter += 1;
//     },
//     decrement (state) {
//       state.counter -= 1;
//     },
//     increase (state, action) {
//       state.counter += action.payload.amount;
//     },
//     toggleCounter (state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// export default postsSlice.reducer
