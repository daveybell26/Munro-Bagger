import { createSlice } from '@reduxjs/toolkit';

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
    setPermission(state) {
      state.status = 'granted';
      state.granted = !state.granted;
      state.expires = 'never';
    },
  },
});

export const { setPermission } = permissionSlice.actions;

export default permissionSlice.reducer;
