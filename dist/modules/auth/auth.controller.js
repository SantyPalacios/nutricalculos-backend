"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const authService = new auth_service_1.AuthService();
class AuthController {
    /**
     * POST /api/auth - Registro de usuario
     */
    async register(req, res) {
        try {
            const result = await authService.register(req.body);
            res.status(201).json(result);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Error al registrar usuario';
            res.status(400).json({ message });
        }
    }
    /**
     * POST /api/auth/login - Inicio de sesión
     */
    async login(req, res) {
        try {
            const result = await authService.login(req.body);
            res.json(result);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Error al iniciar sesión';
            res.status(400).json({ message });
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map