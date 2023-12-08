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
exports.clientService = void 0;
const client_models_1 = require("../models/client.models");
const bcrypt = __importStar(require("bcrypt"));
exports.clientService = {
    abtenerTodoLosClientes: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_models_1.ClientModel.find().populate('id_pais');
    }),
    findOne: (filter) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_models_1.ClientModel.findOne(filter);
    }),
    crearCliente: (entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_models_1.ClientModel.create(entity);
    }),
    obtenerClientePorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_models_1.ClientModel.findById(id);
    }),
    eliminarClientePorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_models_1.ClientModel.findByIdAndDelete(id);
    }),
    actualizarClientePorId: (id, entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield client_models_1.ClientModel.findByIdAndUpdate(id, entity, { new: true });
    }),
    login: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const cliente = yield client_models_1.ClientModel.findOne({ email });
        if (!cliente) {
            throw new Error('Usuario no encontrado');
        }
        const passwordMatches = yield bcrypt.compare(password, cliente.password);
        if (!passwordMatches) {
            throw new Error('Contraseña incorrecta');
        }
        return cliente;
    })
};
//# sourceMappingURL=client.service.js.map