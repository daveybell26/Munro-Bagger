import { createSlice, configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux';
import { ThunkMiddleware } from 'redux-thunk';
import axios from 'axios';

import counterReducer from './counter';
import authReducer from './auth';

//  Same as Create store, with the ability to add several reducers in at once
// import { createStore } from "redux";
// const store = createStore(counterReducer);
const thunkMiddleware = ThunkMiddleware.default;

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },

});

export default store;
