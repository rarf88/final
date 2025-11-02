import { Router } from 'express';
import { create } from '../controllers/attendance.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();
router.post('/', authMiddleware, create);

export default router;
