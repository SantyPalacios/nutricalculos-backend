import type { Request, Response } from 'express';
export declare class UserController {
    /**
     * GET /api/users/me - Obtener usuario logueado
     */
    getMe(req: Request, res: Response): Promise<void>;
    /**
     * PATCH /api/users/me - Actualizar usuario logueado
     */
    updateMe(req: Request, res: Response): Promise<void>;
    /**
     * DELETE /api/users/me - Eliminar cuenta del usuario logueado
     */
    deleteMe(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=user.controller.d.ts.map