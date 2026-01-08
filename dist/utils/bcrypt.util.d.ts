/**
 * Hashear una contraseña
 */
export declare function hashPassword(password: string): Promise<string>;
/**
 * Comparar una contraseña con su hash
 */
export declare function comparePassword(password: string, hash: string): Promise<boolean>;
//# sourceMappingURL=bcrypt.util.d.ts.map