import express from 'express';
import { getExploreUnclimbed, getExploreRandom } from './controllers/explore';
import { getAllMountains, getMountainById } from './controllers/mountain';
import getRandomUserPics from './controllers/user';
import login from './controllers/login';
import postPicture from './controllers/picture';
import {
  postClimbed, postWishlist, putClimbed, putWishlist,
} from './controllers/status';

const router = express.Router();

router.get('/me', getRandomUserPics);

router.get('/mountain', getAllMountains);
router.get('/mountain/:id', getMountainById);

router.get('/explore/random', getExploreRandom);
router.get('/explore/unclimbed', getExploreUnclimbed);

router.post('/status/climbed/:MountainId', postClimbed);
router.put('/status/:id/climbed/:bool', putClimbed);
router.post('/status/wishlist/:MountainId', postWishlist);
router.put('/status/:id/wishlist/:bool', putWishlist);

router.post('/login', login);

router.post('/picture/mountain/:MountainId/user/:UserId', postPicture);

export default router;
