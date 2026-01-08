"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const database_1 = require("../../config/database");
class UserService {
    /**
     * Obtener usuario por ID
     */
    async getUserById(userId) {
        const user = await database_1.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                username: true,
                peso: true,
                altura: true,
                imc: true,
                sexo: true,
                edad: true,
                actividad: true,
                red: true,
            },
        });
        return user;
    }
    /**
     * Actualizar usuario
     */
    async updateUser(userId, updates) {
        // Si se está actualizando el email, verificar que no esté en uso
        if (updates.email) {
            const emailExists = await database_1.prisma.user.findFirst({
                where: {
                    email: updates.email,
                    NOT: { id: userId },
                },
            });
            if (emailExists) {
                throw new Error('Email ya en uso');
            }
        }
        const updatedUser = await database_1.prisma.user.update({
            where: { id: userId },
            data: updates,
            select: {
                id: true,
                email: true,
                username: true,
                peso: true,
                altura: true,
                imc: true,
                sexo: true,
                edad: true,
                actividad: true,
                red: true,
            },
        });
        return updatedUser;
    }
    /**
     * Eliminar usuario
     */
    async deleteUser(userId) {
        await database_1.prisma.user.delete({
            where: { id: userId },
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map