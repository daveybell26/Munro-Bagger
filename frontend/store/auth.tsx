import { createSlice } from '@reduxjs/toolkit';

const intiialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: 'auth',
  initialState: intiialAuthState,
  reducers: {
    login (state) {
      state.isAuthenticated = true;
    },
    logout (state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
