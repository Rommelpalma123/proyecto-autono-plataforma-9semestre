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
exports.RegisterResolver = void 0;
const type_graphql_1 = require("type-graphql");
const index_models_1 = require("../../../models/index.models");
const create_register_input_1 = require("../Inputs/register/create.register.input");
const register_service_1 = require("../../services/register.service");
const update_register_input_1 = require("../Inputs/register/update.register.input");
let RegisterResolver = exports.RegisterResolver = class RegisterResolver {
    constructor(registerService) {
        this.registerService = registerService;
        this.registerService = new register_service_1.RegisterService();
    }
    createRegister(createRegisterInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.registerService.createRegister(createRegisterInput);
        });
    }
    allRegister() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.registerService.findAllRegister();
        });
    }
    findRegister(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.registerService.findOneRegister(id);
        });
    }
    deleteRegister(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.registerService.deleteRegister(id);
        });
    }
    updateRegister(id, updateRegisterInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.registerService.updateRegister(id, updateRegisterInput);
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Register),
    __param(0, (0, type_graphql_1.Arg)('createRegister')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_register_input_1.CreateRegisterInput]),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "createRegister", null);
__decorate([
    (0, type_graphql_1.Query)(() => [index_models_1.Register], { name: 'allRegister' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "allRegister", null);
__decorate([
    (0, type_graphql_1.Query)(() => index_models_1.Register, { name: 'findRegisterById' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "findRegister", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Register, { name: 'deleleRegister' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "deleteRegister", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Register, { name: 'updateRegister' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('updateRegisterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_register_input_1.UpdateRegisterInput]),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "updateRegister", null);
exports.RegisterResolver = RegisterResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => index_models_1.Register),
    __metadata("design:paramtypes", [register_service_1.RegisterService])
], RegisterResolver);
//# sourceMappingURL=register.resolver.js.map