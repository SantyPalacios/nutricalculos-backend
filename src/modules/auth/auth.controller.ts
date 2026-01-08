import type { Request, Response } from 'express';
import { AuthService } from './auth.service';

const authService = new AuthService();

export class AuthController {
    /**
     * POST /api/auth - Registro de usuario
     */
    async register(req: Request, res: Response): Promise<void> {
        try {
            const result = await authService.register(req.body);
            res.status(201).json(result);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Error al registrar usuario';
            res.status(400).json({ message });
        }
    }

    /**
     * POST /api/auth/login - Inicio de sesión
     */
    async login(req: Request, res: Response): Promise<void> {
        try {
            const result = await authService.login(req.body);
            res.json(result);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Error al iniciar sesión';
            res.status(400).json({ message });
        }
    }
}
