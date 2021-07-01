/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PermissionInfo {
  status: 'granted' | 'undetermined' | 'denied';
  granted: boolean;
  expires: 'never' | number;
  canAskAgain: boolean;
  ios?: {
    scope: 'whenInUse' | 'always';
  };
  android?: {
    scope: 'fine' | 'coarse' | 'none';
  };
}

interface PermissionResponse {
  status: 'granted' | 'undetermined' | 'denied';
  granted: boolean;
  expires: 'never' | number;
  canAskAgain: boolean;
  permissions: {
    [permissionType: string]: PermissionInfo;
  };
}

const initialState = { status: 'undetermined' } as PermissionResponse;

const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setPermission(state, action: PayloadAction<boolean>) {
      state.granted = action.payload;
    },
  },
});

export const { setPermission } = permissionSlice.actions;

export default permissionSlice.reducer;
