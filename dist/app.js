"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = require("./config/cors");
const logger_middleware_1 = require("./middleware/logger.middleware");
const error_middleware_1 = require("./middleware/error.middleware");
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const user_routes_1 = __importDefault(require("./modules/users/user.routes"));
const app = (0, express_1.default)();
// Middlewares globales
app.use(cors_1.corsOptions);
app.use(express_1.default.json());
app.use(logger_middleware_1.loggerMiddleware);
// Rutas
app.use('/api/auth', auth_routes_1.default);
app.use('/api/users', user_routes_1.default);
// Ruta de bienvenida
app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a Express con TypeScript',
        version: '2.0.0',
        endpoints: {
            auth: '/api/auth',
            users: '/api/users',
        },
    });
});
// Middleware de manejo de errores (debe ir al final)
app.use(error_middleware_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map