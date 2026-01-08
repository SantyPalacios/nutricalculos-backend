import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { SignOptions } from 'jsonwebtoken';
import { prisma } from '../../config/database';
import { config } from '../../config/env';
import type { RegisterDTO, LoginDTO, AuthResponse } from './auth.types';

export class AuthService {
    /**
     * Registrar un nuevo usuario
     */
    async register(data: RegisterDTO): Promise<AuthResponse> {
        const { username, email, password } = data;

        // Normalizar datos
        const normalizedUsername = username.toLowerCase().trim();
        const normalizedEmail = email.toLowerCase().trim();

        // Validar campos requeridos
        if (!normalizedUsername || !normalizedEmail || !password) {
            throw new Error('Faltan campos requeridos');
        }

        // Verificar username duplicado
        const usernameExists = await prisma.user.findFirst({
            where: { username: normalizedUsername },
        });

        if (usernameExists) {
            throw new Error('El usuario ya existe');
        }

        // Verificar email duplicado
        const emailExists = await prisma.user.findUnique({
            where: { email: normalizedEmail },
        });

        if (emailExists) {
            throw new Error('El email ya está en uso');
        }

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear usuario
        const newUser = await prisma.user.create({
            data: {
                username: normalizedUsername,
                email: normalizedEmail,
                password: hashedPassword,
                peso: 0,
                altura: 0,
                imc: 0,
                sexo: '',
                edad: 0,
                actividad: '',
                red: 0,
            },
        });

        // Generar token
        const token = jwt.sign(
            { id: newUser.id, email: newUser.email },
            config.jwtSecret,
            { expiresIn: config.jwtExpiresIn } as SignOptions
        );

        return {
            message: 'Usuario registrado exitosamente',
            token,
            user: {
                id: newUser.id,
                email: newUser.email,
                username: newUser.username,
                peso: newUser.peso,
                altura: newUser.altura,
                imc: newUser.imc,
                sexo: newUser.sexo,
                edad: newUser.edad,
                actividad: newUser.actividad,
                red: newUser.red,
            },
        };
    }

    /**
     * Iniciar sesión
     */
    async login(data: LoginDTO): Promise<AuthResponse> {
        const { email, password } = data;

        // Normalizar email
        const normalizedEmail = email.toLowerCase().trim();

        // Buscar usuario
        const user = await prisma.user.findUnique({
            where: { email: normalizedEmail },
        });

        if (!user) {
            throw new Error('Credenciales inválidas');
        }

        // Verificar contraseña
        const passwordValid = await bcrypt.compare(password, user.password);

        if (!passwordValid) {
            throw new Error('Credenciales inválidas');
        }

        // Generar token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            config.jwtSecret,
            { expiresIn: config.jwtExpiresIn } as SignOptions
        );

        return {
            message: 'Login exitoso',
            token,
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                peso: user.peso,
                altura: user.altura,
                imc: user.imc,
                sexo: user.sexo,
                edad: user.edad,
                actividad: user.actividad,
                red: user.red,
            },
        };
    }
}
