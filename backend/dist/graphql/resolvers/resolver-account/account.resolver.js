"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.AccountResolver = void 0;
const type_graphql_1 = require("type-graphql");
const index_models_1 = require("../../../models/index.models");
const create_account_input_1 = require("../Inputs/account/create.account.input");
const account_service_1 = require("../../services/account.service");
const update_account_input_1 = require("../Inputs/account/update.account.input");
let AccountResolver = exports.AccountResolver = class AccountResolver {
    constructor(accountService) {
        this.accountService = accountService;
        this.accountService = new account_service_1.AccountService();
    }
    createAccount(createAccountInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountService.createAccount(createAccountInput);
        });
    }
    allAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountService.findAllAccount();
        });
    }
    findAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountService.findOneAccount(id);
        });
    }
    deleteAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountService.deleteAccount(id);
        });
    }
    updateAccount(id, updateAccountInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountService.updateAccount(id, updateAccountInput);
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Account),
    __param(0, (0, type_graphql_1.Arg)('createAccount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_input_1.CreateAccountInput]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "createAccount", null);
__decorate([
    (0, type_graphql_1.Query)(() => [index_models_1.Account], { name: 'allAccounts' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "allAccounts", null);
__decorate([
    (0, type_graphql_1.Query)(() => index_models_1.Account, { name: 'findAccountById' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "findAccount", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Account, { name: 'deleleAccount' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "deleteAccount", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Account, { name: 'updateAccount' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('updateAccountInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_account_input_1.UpdateAccountInput]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "updateAccount", null);
exports.AccountResolver = AccountResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => index_models_1.Account),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountResolver);
//# sourceMappingURL=account.resolver.js.map