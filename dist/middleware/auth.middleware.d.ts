import type { Request, Response, NextFunction } from 'express';
export interface JwtPayload {
    id: number;
    email: string;
}
/**
 * Middleware de autenticación
 * Verifica el token JWT en el header Authorization
 */
export declare function authMiddleware(req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=auth.middleware.d.ts.map