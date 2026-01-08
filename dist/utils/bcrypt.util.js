"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT_ROUNDS = 10;
/**
 * Hashear una contraseña
 */
async function hashPassword(password) {
    return bcrypt_1.default.hash(password, SALT_ROUNDS);
}
/**
 * Comparar una contraseña con su hash
 */
async function comparePassword(password, hash) {
    return bcrypt_1.default.compare(password, hash);
}
//# sourceMappingURL=bcrypt.util.js.map