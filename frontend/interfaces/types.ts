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
