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
exports.paisController = void 0;
const country_service_1 = require("../services/country.service");
exports.paisController = {
    nuevoPais: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield country_service_1.countryService.crearPais(req.body);
            console.log('data', data);
            return res.json(data);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarPaises: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const paises = yield country_service_1.countryService.abtenerTodoLosPaises();
            return res.json(paises);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarPais: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const pais = yield country_service_1.countryService.obtenerPaisPorId(req.params.idPais);
            if (!pais) {
                res.json({ mensaje: 'El pais no existe' });
            }
            return res.json(pais);
        }
        catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    actualizarPais: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const pais = yield country_service_1.countryService.actualizarPaisPorId(req.params.idPais, req.body);
            return res.json(pais);
        }
        catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    eliminarPais: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield country_service_1.countryService.eliminarPaisPorId(req.params.idPais);
            return res.json(data);
        }
        catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    })
};
//# sourceMappingURL=country.controller.js.map