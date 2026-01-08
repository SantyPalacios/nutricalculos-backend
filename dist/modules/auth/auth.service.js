"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = require("../../config/database");
const env_1 = require("../../config/env");
class AuthService {
    /**
     * Registrar un nuevo usuario
     */
    async register(data) {
        const { username, email, password } = data;
        // Normalizar datos
        const normalizedUsername = username.toLowerCase().trim();
        const normalizedEmail = email.toLowerCase().trim();
        // Validar campos requeridos
        if (!normalizedUsername || !normalizedEmail || !password) {
            throw new Error('Faltan campos requeridos');
        }
        // Verificar username duplicado
        const usernameExists = await database_1.prisma.user.findFirst({
            where: { username: normalizedUsername },
        });
        if (usernameExists) {
            throw new Error('El usuario ya existe');
        }
        // Verificar email duplicado
        const emailExists = await database_1.prisma.user.findUnique({
            where: { email: normalizedEmail },
        });
        if (emailExists) {
            throw new Error('El email ya está en uso');
        }
        // Hash de la contraseña
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        // Crear usuario
        const newUser = await database_1.prisma.user.create({
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
        const token = jsonwebtoken_1.default.sign({ id: newUser.id, email: newUser.email }, env_1.config.jwtSecret, { expiresIn: env_1.config.jwtExpiresIn });
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
    async login(data) {
        const { email, password } = data;
        // Normalizar email
        const normalizedEmail = email.toLowerCase().trim();
        // Buscar usuario
        const user = await database_1.prisma.user.findUnique({
            where: { email: normalizedEmail },
        });
        if (!user) {
            throw new Error('Credenciales inválidas');
        }
        // Verificar contraseña
        const passwordValid = await bcrypt_1.default.compare(password, user.password);
        if (!passwordValid) {
            throw new Error('Credenciales inválidas');
        }
        // Generar token
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, env_1.config.jwtSecret, { expiresIn: env_1.config.jwtExpiresIn });
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
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map