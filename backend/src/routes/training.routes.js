import { Router } from 'express';
import { getAll, create, patch } from '../controllers/training.controller.js';
import { validateBody, trainingCreateSchema, trainingPatchSchema } from '../middlewares/validation.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();
router.get('/', getAll);
router.post('/', authMiddleware, validateBody(trainingCreateSchema), create);
router.patch('/:id', authMiddleware, validateBody(trainingPatchSchema), patch);

export default router;
