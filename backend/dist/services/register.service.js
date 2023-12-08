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
exports.registerService = void 0;
const register_models_1 = require("../models/register.models");
exports.registerService = {
    abtenerTodosLosRegistros: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield register_models_1.RegisterModel.find().populate('id_cliente id_tramite');
    }),
    crearRegistro: (entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield register_models_1.RegisterModel.create(entity);
    }),
    obtenerRegistroPorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield register_models_1.RegisterModel.findById(id);
    }),
    eliminarRegistrPorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield register_models_1.RegisterModel.findByIdAndDelete(id);
    }),
    actualizarResgistroPorId: (id, entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield register_models_1.RegisterModel.findByIdAndUpdate(id, entity, { new: true });
    })
};
//# sourceMappingURL=register.service.js.map