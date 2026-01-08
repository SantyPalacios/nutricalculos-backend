import { prisma } from '../../config/database';
export class UserService {
    /**
     * Obtener usuario por ID
     */
    async getUserById(userId) {
        const user = await prisma.user.findUnique({
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
            const emailExists = await prisma.user.findFirst({
                where: {
                    email: updates.email,
                    NOT: { id: userId },
                },
            });
            if (emailExists) {
                throw new Error('Email ya en uso');
            }
        }
        const updatedUser = await prisma.user.update({
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
        await prisma.user.delete({
            where: { id: userId },
        });
    }
}
//# sourceMappingURL=user.service.js.map