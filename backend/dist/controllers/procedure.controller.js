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
exports.tramiteController = void 0;
const procedure_service_1 = require("../services/procedure.service");
exports.tramiteController = {
    nuevoTramite: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield procedure_service_1.procedureModelService.crearTramite(req.body);
            return res.json(data);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarTodosLosTramite: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const tramite = yield procedure_service_1.procedureModelService.abtenerTodoLosTramites();
            return res.json(tramite);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarTramite: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const tramite = yield procedure_service_1.procedureModelService.obtenerTramitePorId(req.params.idTramite);
            return res.json(tramite);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    actualizarTramite: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const tramite = yield procedure_service_1.procedureModelService.actualizarTramitePorId(req.params.idTramite, req.body);
            return res.json(tramite);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    eliminarTramite: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield procedure_service_1.procedureModelService.eliminarTramitePorId(req.params.idTramite);
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
//# sourceMappingURL=procedure.controller.js.map