/* eslint-disable @typescript-eslint/no-unused-vars */
interface MountainInfo {
  id: number
  name: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  Peak: {
    latitude: number
    longitude: number
    elevation: number
  },
  Statuses: Statuses[]
  Pictures?: Pictures[]
}

interface Statuses {
  id: number
  climbed: boolean
  wishlist: boolean
}

interface Pictures {
  id: number
  imageUrl: string
  createdAt?: string
  updatedAt?: string
  UserId?: number
  MountainId?: number
}

interface UnclimbedMountain {
  id: number
  name: string
  imageUrl: string
  Statuses: Statuses[]
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
  latitude: number,
  longitude: number,
}

interface ParamTypes {
  id: number,
}
