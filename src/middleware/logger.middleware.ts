import type { Request, Response, NextFunction } from 'express';

/**
 * Middleware de logging para peticiones HTTP
 */
export function loggerMiddleware(req: Request, res: Response, next: NextFunction): void {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}
