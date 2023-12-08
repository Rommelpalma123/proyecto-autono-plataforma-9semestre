"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteController = void 0;
const client_service_1 = require("../services/client.service");
const bcrypt = __importStar(require("bcrypt"));
exports.clienteController = {
    nuevoCliente: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ error: 'Correo no valido' });
            }
            const existingUser = yield client_service_1.clientService.findOne({ email });
            if (existingUser) {
                return res
                    .status(400)
                    .json({ error: 'El correo electrónico ya está registrado' });
            }
            const hashedPassword = yield bcrypt.hash(password, 10);
            req.body.password = hashedPassword;
            const data = yield client_service_1.clientService.crearCliente(req.body);
            return res.json(data);
        }
        catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarClientes: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const clientes = yield client_service_1.clientService.abtenerTodoLosClientes();
            return res.json(clientes);
        }
        catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarCliente: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('Parámetros de la solicitud:', req.params);
            const cliente = yield client_service_1.clientService.obtenerClientePorId(req.params.idCliente);
            console.log('cliente controler', cliente);
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente no encontrado' });
            }
            return res.json(cliente);
        }
        catch (error) {
            console.log('error al encontrar el cliente', error.message);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    actualizarCliente: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const cliente = yield client_service_1.clientService.actualizarClientePorId(req.params.idCliente, req.body);
            return res.json(cliente);
        }
        catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    eliminarCliente: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield client_service_1.clientService.eliminarClientePorId(req.params.idCliente);
            return res.json(data);
        }
        catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    iniciarSession: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res
                    .status(400)
                    .json({ message: 'Correo electrónico y contraseña son obligatorios' });
            }
            const client = yield client_service_1.clientService.login(email, password);
            return res.json(client);
        }
        catch (error) {
            console.error('Error al iniciar sesión:', error.message);
            return res.status(400).json({
                message: error.message
            });
        }
    })
};
//# sourceMappingURL=client.controller.js.map