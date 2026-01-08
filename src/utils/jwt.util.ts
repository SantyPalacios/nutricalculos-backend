import jwt from 'jsonwebtoken';
import { config } from '../config/env';

/**
 * Generar un token JWT
 */
export function generateToken(payload: { id: number; email: string }): string {
    return jwt.sign(payload, config.jwtSecret, {
        expiresIn: config.jwtExpiresIn,
    });
}

/**
 * Verificar un token JWT
 */
export function verifyToken(token: string): { id: number; email: string } {
    return jwt.verify(token, config.jwtSecret) as { id: number; email: string };
}
