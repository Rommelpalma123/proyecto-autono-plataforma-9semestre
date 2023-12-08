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
exports.AccountService = void 0;
const account_models_1 = require("../../models/account.models");
class AccountService {
    createAccount(createAccountInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAccount = account_models_1.AccounttaModel.create(createAccountInput);
            return (yield newAccount).save();
        });
    }
    findAllAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield account_models_1.AccounttaModel.find();
        });
    }
    findOneAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = account_models_1.AccounttaModel.findById(id);
            if (!account) {
                throw new Error('account not found');
            }
            return account;
        });
    }
    deleteAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield account_models_1.AccounttaModel.findByIdAndDelete(id);
            if (!account) {
                throw new Error('account not found to delete');
            }
            return account;
        });
    }
    updateAccount(id, updateAccountInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateAccount = yield account_models_1.AccounttaModel.findByIdAndUpdate(id, updateAccountInput, { new: true });
            if (!updateAccount) {
                throw new Error('account not found to update');
            }
            yield updateAccount.save();
            return updateAccount;
        });
    }
}
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map