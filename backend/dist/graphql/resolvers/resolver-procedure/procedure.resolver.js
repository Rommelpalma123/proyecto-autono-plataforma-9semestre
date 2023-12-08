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
exports.ProcedureResolver = void 0;
const type_graphql_1 = require("type-graphql");
const index_models_1 = require("../../../models/index.models");
const create_procedure_input_1 = require("../Inputs/procedure/create.procedure.input");
const procedure_service_1 = require("../../services/procedure.service");
const update_procedure_input_1 = require("../Inputs/procedure/update.procedure.input");
let ProcedureResolver = exports.ProcedureResolver = class ProcedureResolver {
    constructor(procedureService) {
        this.procedureService = procedureService;
        this.procedureService = new procedure_service_1.ProcedureService();
    }
    createProcedure(createProcedureInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.procedureService.createProcedure(createProcedureInput);
        });
    }
    allProcedure() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.procedureService.findAllProcedure();
        });
    }
    findProcedure(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.procedureService.findOneProcedure(id);
        });
    }
    deleteProcedure(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.procedureService.deleteProcedure(id);
        });
    }
    updateProcedure(id, updateProcedureInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.procedureService.updateProcedure(id, updateProcedureInput);
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Procedure),
    __param(0, (0, type_graphql_1.Arg)('createProcedure')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_procedure_input_1.CreateProcedureInput]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "createProcedure", null);
__decorate([
    (0, type_graphql_1.Query)(() => [index_models_1.Procedure], { name: 'allProcedure' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "allProcedure", null);
__decorate([
    (0, type_graphql_1.Query)(() => index_models_1.Procedure, { name: 'findProcedureById' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "findProcedure", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Procedure, { name: 'deleleProcedure' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "deleteProcedure", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Procedure, { name: 'updateProcedure' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('updateProcedureInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_procedure_input_1.UpdateProcedureInput]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "updateProcedure", null);
exports.ProcedureResolver = ProcedureResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => index_models_1.Procedure),
    __metadata("design:paramtypes", [procedure_service_1.ProcedureService])
], ProcedureResolver);
//# sourceMappingURL=procedure.resolver.js.map