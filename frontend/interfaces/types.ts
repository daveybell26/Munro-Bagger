/* eslint-disable @typescript-eslint/no-unused-vars */
interface MountainInfo {
  Peak: {
    elevation: number
    latitude: number,
    longitude: number,
  },
  Statuses: [
    {
      climbed: boolean,
      wishlist: boolean,
    },
  ],
  createdAt: string,
  id: number,
  imageUrl: string,
  name: string,
  updatedAt: string,
}

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

interface LatLng {
  latitude: Number,
  longitude: Number,
}
