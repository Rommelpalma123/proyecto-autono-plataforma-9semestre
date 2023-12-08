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
exports.procedureModelService = void 0;
const procedure_models_1 = require("../models/procedure.models");
exports.procedureModelService = {
    abtenerTodoLosTramites: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield procedure_models_1.ProcedureModel.find();
    }),
    crearTramite: (entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield procedure_models_1.ProcedureModel.create(entity);
    }),
    obtenerTramitePorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield procedure_models_1.ProcedureModel.findById(id);
    }),
    eliminarTramitePorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield procedure_models_1.ProcedureModel.findByIdAndDelete(id);
    }),
    actualizarTramitePorId: (id, entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield procedure_models_1.ProcedureModel.findByIdAndUpdate(id, entity, { new: true });
    })
};
//# sourceMappingURL=procedure.service.js.map