import type { UserResponse } from '../users/user.types';
export interface RegisterDTO {
    username: string;
    email: string;
    password: string;
}
export interface LoginDTO {
    email: string;
    password: string;
}
export interface AuthResponse {
    message: string;
    token: string;
    user: UserResponse;
}
export interface UserPayload {
    id: number;
    email: string;
}
//# sourceMappingURL=auth.types.d.ts.map