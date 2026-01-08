"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const userService = new user_service_1.UserService();
class UserController {
    /**
     * GET /api/users/me - Obtener usuario logueado
     */
    async getMe(req, res) {
        try {
            const userId = req.user.id;
            const user = await userService.getUserById(userId);
            if (!user) {
                res.status(404).json({ message: 'Usuario no encontrado' });
                return;
            }
            res.json(user);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Error al obtener usuario';
            res.status(500).json({ message });
        }
    }
    /**
     * PATCH /api/users/me - Actualizar usuario logueado
     */
    async updateMe(req, res) {
        try {
            const userId = req.user.id;
            const updatedUser = await userService.updateUser(userId, req.body);
            res.json(updatedUser);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Error al actualizar usuario';
            res.status(400).json({ message });
        }
    }
    /**
     * DELETE /api/users/me - Eliminar cuenta del usuario logueado
     */
    async deleteMe(req, res) {
        try {
            const userId = req.user.id;
            await userService.deleteUser(userId);
            res.json({ message: 'Cuenta eliminada' });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Error al eliminar cuenta';
            res.status(500).json({ message });
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map