"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
/**
 * Middleware global de manejo de errores
 */
function errorHandler(err, req, res, next) {
    console.error('Error:', err.stack);
    res.status(500).json({
        message: 'Error interno del servidor',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
}
//# sourceMappingURL=error.middleware.js.map