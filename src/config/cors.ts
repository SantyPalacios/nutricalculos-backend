import cors from 'cors';
import { config } from './env';

export const corsOptions = cors({
    origin: config.corsOrigin,
    credentials: true,
});
