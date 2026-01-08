"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
/**
 * Middleware de autenticación
 * Verifica el token JWT en el header Authorization
 */
function authMiddleware(req, res, next) {
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
        const decoded = jsonwebtoken_1.default.verify(token, env_1.config.jwtSecret);
        req.user = decoded;
        next();
    }
    catch {
        res.status(401).json({ message: 'Token inválido' });
    }
}
//# sourceMappingURL=auth.middleware.js.map