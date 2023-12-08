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
exports.UserService = void 0;
const index_models_1 = require("../../models/index.models");
class UserService {
    createUser(createUserInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = createUserInput;
            const existingUser = yield index_models_1.userModel.findOne({ email });
            if (existingUser) {
                throw new Error('This email already exists');
            }
            const newUser = index_models_1.userModel.create(createUserInput);
            return (yield newUser).save();
        });
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield index_models_1.userModel.find();
        });
    }
    findBiIdUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = index_models_1.userModel.findById(id);
            if (!user) {
                throw new Error('User not fount');
            }
            return user;
        });
    }
    deleteUserBiId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = index_models_1.userModel.findByIdAndDelete(id);
            if (!user) {
                throw new Error('User not fount to delete');
            }
            return user;
        });
    }
    updateUserBiId(id, updateUserInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateUser = yield index_models_1.userModel.findByIdAndUpdate(id, updateUserInput, {
                new: true
            });
            if (!updateUser) {
                throw new Error('User not found to update');
            }
            yield updateUser.save();
            return updateUser;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map