import express from 'express';
import getExplore from './controllers/explore';
import getAllMountains from './controllers/mountain';
import getUser from './controllers/user';

const router = express.Router();

router.get('/user', getUser);
router.get('/mountain', getAllMountains);
router.get('/explore', getExplore);

export default router;
