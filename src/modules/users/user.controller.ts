import type { Request, Response } from 'express';
import { UserService } from './user.service';

const userService = new UserService();

export class UserController {
    /**
     * GET /api/users/me - Obtener usuario logueado
     */
    async getMe(req: Request, res: Response): Promise<void> {
        try {
            const userId = (req as any).user.id;
            const user = await userService.getUserById(userId);

            if (!user) {
                res.status(404).json({ message: 'Usuario no encontrado' });
                return;
            }

            res.json(user);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Error al obtener usuario';
            res.status(500).json({ message });
        }
    }

    /**
     * PATCH /api/users/me - Actualizar usuario logueado
     */
    async updateMe(req: Request, res: Response): Promise<void> {
        try {
            const userId = (req as any).user.id;
            const updatedUser = await userService.updateUser(userId, req.body);
            res.json(updatedUser);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Error al actualizar usuario';
            res.status(400).json({ message });
        }
    }

    /**
     * DELETE /api/users/me - Eliminar cuenta del usuario logueado
     */
    async deleteMe(req: Request, res: Response): Promise<void> {
        try {
            const userId = (req as any).user.id;
            await userService.deleteUser(userId);
            res.json({ message: 'Cuenta eliminada' });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Error al eliminar cuenta';
            res.status(500).json({ message });
        }
    }
}
