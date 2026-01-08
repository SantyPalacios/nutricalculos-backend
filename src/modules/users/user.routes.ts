import express from 'express';
import { UserController } from './user.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

const router = express.Router();
const userController = new UserController();

// Todas las rutas requieren autenticación
router.use(authMiddleware);

// GET /api/users/me - Obtener usuario logueado
router.get('/me', (req, res) => userController.getMe(req, res));

// PATCH /api/users/me - Actualizar usuario
router.patch('/me', (req, res) => userController.updateMe(req, res));

// DELETE /api/users/me - Eliminar cuenta
router.delete('/me', (req, res) => userController.deleteMe(req, res));

export default router;