import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllMountains } from '../services/apiService';

const getMountains = createAsyncThunk('counter/getMountains', async () => getAllMountains());

const initialCounterState = { counter: 0, showCounter: true, mountains: [] };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment (state) {
      state.counter += 1;
    },
    decrement (state) {
      state.counter -= 1;
    },
    increase (state, action) {
      state.counter += action.payload.amount;
    },
    toggleCounter (state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
