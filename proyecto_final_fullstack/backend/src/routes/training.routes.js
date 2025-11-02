import { Router } from 'express';
import { getAll, create, patch } from '../controllers/training.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();
router.get('/', getAll);
router.post('/', authMiddleware, create);
router.patch('/:id', authMiddleware, patch);

export default router;
