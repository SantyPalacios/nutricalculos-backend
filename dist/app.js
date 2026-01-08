import express from 'express';
import { corsOptions } from './config/cors';
import { loggerMiddleware } from './middleware/logger.middleware';
import { errorHandler } from './middleware/error.middleware';
import authRoutes from './modules/auth/auth.routes';
import userRoutes from './modules/users/user.routes';
const app = express();
// Middlewares globales
app.use(corsOptions);
app.use(express.json());
app.use(loggerMiddleware);
// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
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
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map