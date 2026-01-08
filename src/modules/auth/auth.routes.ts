import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();
const authController = new AuthController();

// POST /api/auth - Registro
router.post('/', (req, res) => authController.register(req, res));

// POST /api/auth/login - Login
router.post('/login', (req, res) => authController.login(req, res));

export default router;
