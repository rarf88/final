import { Router } from 'express';
import { login, register, me } from '../controllers/auth.controller.js';
import { validateBody, registerSchema, loginSchema } from '../middlewares/validation.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();
router.post('/register', validateBody(registerSchema), register);
router.post('/login', validateBody(loginSchema), login);
router.get('/me', authMiddleware, me);

export default router;
