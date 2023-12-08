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
exports.tipoCuentaController = void 0;
const account_service_1 = require("../services/account.service");
exports.tipoCuentaController = {
    nuevoTipocuenta: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield account_service_1.accountService.crearCuenta(req.body);
            return res.json(data);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarTipocuentas: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const tipocuenta = yield account_service_1.accountService.abtenerTodaLasCuentas();
            return res.json(tipocuenta);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    mostrarTipocuenta: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const tipocuenta = yield account_service_1.accountService.obtenerCuentaPorId(req.params.idTipocuenta);
            return res.json(tipocuenta);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    actualizarTipocuenta: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const tipocuenta = yield account_service_1.accountService.actualizarCuentaPorId(req.params.idTipocuenta, req.body);
            return res.json(tipocuenta);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            });
        }
    }),
    eliminarTipocuenta: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield account_service_1.accountService.eliminarCuentaPorId(req.params.idTipocuenta);
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
//# sourceMappingURL=account.controller.js.map