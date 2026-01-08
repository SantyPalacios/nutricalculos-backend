import jwt from 'jsonwebtoken';
import { config } from '../config/env';
/**
 * Middleware de autenticación
 * Verifica el token JWT en el header Authorization
 */
export function authMiddleware(req, res, next) {
    const header = req.headers.authorization;
    if (!header) {
        res.status(401).json({ message: 'Token requerido' });
        return;
    }
    const token = header.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Token requerido' });
        return;
    }
    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded;
        next();
    }
    catch {
        res.status(401).json({ message: 'Token inválido' });
    }
}
//# sourceMappingURL=auth.middleware.js.map