"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
const authController = new auth_controller_1.AuthController();
// POST /api/auth - Registro
router.post('/', (req, res) => authController.register(req, res));
// POST /api/auth/login - Login
router.post('/login', (req, res) => authController.login(req, res));
exports.default = router;
//# sourceMappingURL=auth.routes.js.map