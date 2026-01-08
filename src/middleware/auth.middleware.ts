import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/env';

export interface JwtPayload {
    id: number;
    email: string;
}

/**
 * Middleware de autenticación
 * Verifica el token JWT en el header Authorization
 */
export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
    const header = req.headers.authorization;

    if (!header) {
        res.status(401).json({ message: 'Token requerido' });
        return;
    }

    const token = header.split(' ')[1];

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        (req as any).user = decoded;
        next();
    } catch {
        res.status(401).json({ message: 'Token inválido' });
    }
}
