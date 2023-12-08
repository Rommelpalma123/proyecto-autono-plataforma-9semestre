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
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const index_models_1 = require("../../models/index.models");
const CreateUserInput_1 = require("./Inputs/CreateUserInput");
const user_service_1 = require("../services/user.service");
const UpdateUserInput_1 = require("./Inputs/UpdateUserInput");
let UserResolver = exports.UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
        this.userService = new user_service_1.UserService();
    }
    createUser(createUserInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.createUser(createUserInput);
        });
    }
    allUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.findAllUsers();
        });
    }
    findUserBiId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.findBiIdUser(id);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.deleteUserBiId(id);
        });
    }
    updateUser(id, updateUserInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.updateUserBiId(id, updateUserInput);
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.User),
    __param(0, (0, type_graphql_1.Arg)('createUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserInput_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, type_graphql_1.Query)(() => [index_models_1.User], { name: 'allUser' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "allUser", null);
__decorate([
    (0, type_graphql_1.Query)(() => index_models_1.User, { name: 'findUserBiId' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findUserBiId", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.User, { name: 'deleleUser' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.User, { name: 'updateUser' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('updateUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateUserInput_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => index_models_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
//# sourceMappingURL=user.resolvers.js.map