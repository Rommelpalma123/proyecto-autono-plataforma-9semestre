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
exports.ProcedureService = void 0;
const procedure_models_1 = require("../../models/procedure.models");
class ProcedureService {
    createProcedure(createProceduretInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPrecedure = procedure_models_1.ProcedureModel.create(createProceduretInput);
            return (yield newPrecedure).save();
        });
    }
    findAllProcedure() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield procedure_models_1.ProcedureModel.find();
        });
    }
    findOneProcedure(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const procedure = procedure_models_1.ProcedureModel.findById(id);
            if (!procedure) {
                throw new Error('procedure not found');
            }
            return procedure;
        });
    }
    deleteProcedure(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const procedure = yield procedure_models_1.ProcedureModel.findByIdAndDelete(id);
            if (!procedure) {
                throw new Error('procedure not found to delete');
            }
            return procedure;
        });
    }
    updateProcedure(id, updateAccountInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateProcedure = yield procedure_models_1.ProcedureModel.findByIdAndUpdate(id, updateAccountInput, { new: true });
            if (!updateProcedure) {
                throw new Error('procedure not found to update');
            }
            yield updateProcedure.save();
            return updateProcedure;
        });
    }
}
exports.ProcedureService = ProcedureService;
//# sourceMappingURL=procedure.service.js.map