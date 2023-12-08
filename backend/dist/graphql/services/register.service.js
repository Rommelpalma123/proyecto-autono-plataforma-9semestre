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
exports.RegisterService = void 0;
const register_models_1 = require("../../models/register.models");
class RegisterService {
    createRegister(createRegisterInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const newRegister = register_models_1.RegisterModel.create(createRegisterInput);
            return (yield newRegister).save();
        });
    }
    findAllRegister() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield register_models_1.RegisterModel.find();
        });
    }
    findOneRegister(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const register = register_models_1.RegisterModel.findById(id);
            if (!register) {
                throw new Error('register not found');
            }
            return register;
        });
    }
    deleteRegister(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const register = yield register_models_1.RegisterModel.findByIdAndDelete(id);
            if (!register) {
                throw new Error('register not found to delete');
            }
            return register;
        });
    }
    updateRegister(id, updateClientInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateRegister = yield register_models_1.RegisterModel.findByIdAndUpdate(id, updateClientInput, { new: true });
            if (!updateRegister) {
                throw new Error('register not found to update');
            }
            yield updateRegister.save();
            return updateRegister;
        });
    }
}
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map