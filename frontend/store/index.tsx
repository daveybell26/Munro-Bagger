import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './auth';
import mountainsReducer from './getAllMountains.store';
import oneMountainReducer from './getOneMountain.store';

//  Same as Create store, with the ability to add several reducers in at once
// import { createStore } from "redux";
// const store = createStore(counterReducer);

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // auth: authReducer,
    allMountains: mountainsReducer,
    oneMountain: oneMountainReducer,
  },

});

export default store;
