"use strict";
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
exports.registroController = void 0;
const register_service_1 = require("../services/register.service");
exports.registroController = {
    nuevoRegistro: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const registro = yield register_service_1.registerService.crearRegistro(req.body);
            return res.json(registro);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarTodosLosRegistro: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const registros = yield register_service_1.registerService.abtenerTodosLosRegistros();
            return res.json(registros);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarRegistro: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const registro = yield register_service_1.registerService.obtenerRegistroPorId(req.params.idRegistro);
            return res.json(registro);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    actualizarRegistro: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const registro = yield register_service_1.registerService.actualizarResgistroPorId(req.params.idRegistro, req.body);
            return res.json(registro);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    eliminarRegistro: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield register_service_1.registerService.eliminarRegistrPorId(req.params.idRegistro);
            return res.json(data);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    })
};
//# sourceMappingURL=register.controller.js.map