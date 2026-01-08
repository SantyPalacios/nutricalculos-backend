interface Config {
    jwtSecret: string;
    jwtExpiresIn: string;
    port: number;
    corsOrigin: string;
    nodeEnv: string;
}

export const config: Config = {
    jwtSecret: process.env.JWT_SECRET || 'puerta18',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h',
    port: parseInt(process.env.PORT || '3000', 10),
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    nodeEnv: process.env.NODE_ENV || 'development',
};
