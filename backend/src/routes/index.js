import { Router } from 'express';
import auth from './auth.routes.js';
import trainings from './training.routes.js';
import attendance from './attendance.routes.js';

const router = Router();
router.use('/auth', auth);
router.use('/trainings', trainings);
router.use('/attendance', attendance);

export default router;
