import type { Request, Response } from 'express';
export declare class AuthController {
    /**
     * POST /api/auth - Registro de usuario
     */
    register(req: Request, res: Response): Promise<void>;
    /**
     * POST /api/auth/login - Inicio de sesión
     */
    login(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=auth.controller.d.ts.map