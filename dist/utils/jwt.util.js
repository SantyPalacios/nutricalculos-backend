import jwt from 'jsonwebtoken';
import { config } from '../config/env';
/**
 * Generar un token JWT
 */
export function generateToken(payload) {
    return jwt.sign(payload, config.jwtSecret, {
        expiresIn: config.jwtExpiresIn,
    });
}
/**
 * Verificar un token JWT
 */
export function verifyToken(token) {
    return jwt.verify(token, config.jwtSecret);
}
//# sourceMappingURL=jwt.util.js.map