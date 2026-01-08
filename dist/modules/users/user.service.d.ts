import type { UpdateUserDTO, UserResponse } from './user.types';
export declare class UserService {
    /**
     * Obtener usuario por ID
     */
    getUserById(userId: number): Promise<UserResponse | null>;
    /**
     * Actualizar usuario
     */
    updateUser(userId: number, updates: UpdateUserDTO): Promise<UserResponse>;
    /**
     * Eliminar usuario
     */
    deleteUser(userId: number): Promise<void>;
}
//# sourceMappingURL=user.service.d.ts.map