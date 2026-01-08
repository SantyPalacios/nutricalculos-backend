/**
 * Middleware global de manejo de errores
 */
export function errorHandler(err, req, res, next) {
    console.error('Error:', err.stack);
    res.status(500).json({
        message: 'Error interno del servidor',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
}
//# sourceMappingURL=error.middleware.js.map