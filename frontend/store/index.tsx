import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';
import { postsSlice } from './posts';

const postsReducer = postsSlice.reducer;

//  Same as Create store, with the ability to add several reducers in at once
// import { createStore } from "redux";
// const store = createStore(counterReducer);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    posts: postsReducer,
  },

});

export default store;
