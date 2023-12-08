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
exports.accountService = void 0;
const account_models_1 = require("../models/account.models");
exports.accountService = {
    abtenerTodaLasCuentas: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield account_models_1.AccounttaModel.find().populate('id_cliente');
    }),
    crearCuenta: (entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield account_models_1.AccounttaModel.create(entity);
    }),
    obtenerCuentaPorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield account_models_1.AccounttaModel.findById(id);
    }),
    eliminarCuentaPorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield account_models_1.AccounttaModel.findByIdAndDelete(id);
    }),
    actualizarCuentaPorId: (id, entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield account_models_1.AccounttaModel.findByIdAndUpdate(id, entity, { new: true });
    })
};
//# sourceMappingURL=account.service.js.map