"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const router = express_1.default.Router();
const userController = new user_controller_1.UserController();
// Todas las rutas requieren autenticación
router.use(auth_middleware_1.authMiddleware);
// GET /api/users/me - Obtener usuario logueado
router.get('/me', (req, res) => userController.getMe(req, res));
// PATCH /api/users/me - Actualizar usuario
router.patch('/me', (req, res) => userController.updateMe(req, res));
// DELETE /api/users/me - Eliminar cuenta
router.delete('/me', (req, res) => userController.deleteMe(req, res));
exports.default = router;
//# sourceMappingURL=user.routes.js.map