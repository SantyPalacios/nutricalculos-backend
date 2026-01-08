import type { RegisterDTO, LoginDTO, AuthResponse } from './auth.types';
export declare class AuthService {
    /**
     * Registrar un nuevo usuario
     */
    register(data: RegisterDTO): Promise<AuthResponse>;
    /**
     * Iniciar sesión
     */
    login(data: LoginDTO): Promise<AuthResponse>;
}
//# sourceMappingURL=auth.service.d.ts.map