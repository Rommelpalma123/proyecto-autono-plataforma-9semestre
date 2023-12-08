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
exports.ciudadController = void 0;
const city_service_1 = require("../services/city.service");
exports.ciudadController = {
    nuevaCiudad: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield city_service_1.cityService.crearCiudad(req.body);
            return res.json(data);
        }
        catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarCiudades: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield city_service_1.cityService.abtenerTodaLasCiudades();
            console.log('controller ciudad', data);
            return res.json(data);
        }
        catch (error) {
            console.log('error ciudad', error.message);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarCiudad: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const ciudad = yield city_service_1.cityService.obtenerCiudadPorId(req.params.idCiudad);
            return res.json(ciudad);
        }
        catch (error) {
            console.log('error ciudad', error.message);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    actualizarCiudad: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const ciudad = yield city_service_1.cityService.actualizarCiudadPorId(req.params.idCiudad, req.body);
            return res.json(ciudad);
        }
        catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    eliminarCiudad: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield city_service_1.cityService.eliminarCiudadPorId(req.params.idCiudad);
            return res.json(data);
        }
        catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    })
};
//# sourceMappingURL=city.controller.js.map