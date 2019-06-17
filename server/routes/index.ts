import { protectedRouteMiddleware } from './../middlewares/protectedRouteMiddleware';
import { Router } from 'express';

import { authRoutes } from './authRoutes';
import { userRoutes } from './userRoutes';

const router = Router();

router.use('/', authRoutes);
router.use('/user', protectedRouteMiddleware, userRoutes);

export const routes = router;
