/**
 * Generar un token JWT
 */
export declare function generateToken(payload: {
    id: number;
    email: string;
}): string;
/**
 * Verificar un token JWT
 */
export declare function verifyToken(token: string): {
    id: number;
    email: string;
};
//# sourceMappingURL=jwt.util.d.ts.map