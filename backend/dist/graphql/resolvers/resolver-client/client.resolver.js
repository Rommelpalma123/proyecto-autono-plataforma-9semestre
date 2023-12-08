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
exports.ClientResolver = void 0;
const type_graphql_1 = require("type-graphql");
const index_models_1 = require("../../../models/index.models");
const create_client_input_1 = require("../Inputs/client/create.client.input");
const client_service_1 = require("../../services/client.service");
const update_client_input_1 = require("../Inputs/client/update.client.input");
let ClientResolver = exports.ClientResolver = class ClientResolver {
    constructor(clientService) {
        this.clientService = clientService;
        this.clientService = new client_service_1.ClientService();
    }
    createClient(createClientInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clientService.createClient(createClientInput);
        });
    }
    allClient() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clientService.findAllClient();
        });
    }
    findClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clientService.findOneClient(id);
        });
    }
    deleteClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clientService.deleteClient(id);
        });
    }
    updateClient(id, updateClientInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clientService.updateClient(id, updateClientInput);
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.clientService.login(email, password);
            if (!user) {
                throw Error('Email or Password is incorrect');
            }
            return user;
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Client),
    __param(0, (0, type_graphql_1.Arg)('createClient')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_input_1.CreateClientInput]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "createClient", null);
__decorate([
    (0, type_graphql_1.Query)(() => [index_models_1.Client], { name: 'allClient' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "allClient", null);
__decorate([
    (0, type_graphql_1.Query)(() => index_models_1.Client, { name: 'findClientById' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "findClient", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Client, { name: 'deleleClient' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "deleteClient", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Client, { name: 'updateClient' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('updateClienttInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_client_input_1.UpdateClientInput]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "updateClient", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Client, { name: 'login' }),
    __param(0, (0, type_graphql_1.Arg)('email')),
    __param(1, (0, type_graphql_1.Arg)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "login", null);
exports.ClientResolver = ClientResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => index_models_1.Client),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientResolver);
//# sourceMappingURL=client.resolver.js.map