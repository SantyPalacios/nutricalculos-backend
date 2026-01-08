"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = loggerMiddleware;
/**
 * Middleware de logging para peticiones HTTP
 */
function loggerMiddleware(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}
//# sourceMappingURL=logger.middleware.js.map