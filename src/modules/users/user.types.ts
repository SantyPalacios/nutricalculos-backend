export interface UpdateUserDTO {
    username?: string;
    email?: string;
    peso?: number;
    altura?: number;
    imc?: number;
    sexo?: string;
    edad?: number;
    actividad?: string;
    red?: number;
}

export interface UserResponse {
    id: number;
    email: string;
    username: string;
    peso: number;
    altura: number;
    imc: number;
    sexo: string;
    edad: number;
    actividad: string;
    red: number;
}
