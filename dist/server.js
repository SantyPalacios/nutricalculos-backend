import app from './app';
import { config } from './config/env';
const PORT = config.port;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📝 Entorno: ${config.nodeEnv}`);
    console.log(`🔐 CORS habilitado para: ${config.corsOrigin}`);
});
//# sourceMappingURL=server.js.map