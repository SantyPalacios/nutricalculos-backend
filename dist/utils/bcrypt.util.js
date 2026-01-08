import bcrypt from 'bcrypt';
const SALT_ROUNDS = 10;
/**
 * Hashear una contraseña
 */
export async function hashPassword(password) {
    return bcrypt.hash(password, SALT_ROUNDS);
}
/**
 * Comparar una contraseña con su hash
 */
export async function comparePassword(password, hash) {
    return bcrypt.compare(password, hash);
}
//# sourceMappingURL=bcrypt.util.js.map