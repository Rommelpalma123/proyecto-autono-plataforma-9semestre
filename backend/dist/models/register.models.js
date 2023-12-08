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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterModel = exports.Register = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
const client_models_1 = require("./client.models");
const procedure_models_1 = require("./procedure.models");
let Register = exports.Register = class Register {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    (0, typegoose_1.prop)({ type: mongoose_1.Schema.Types.ObjectId, ref: 'Client', required: true }),
    __metadata("design:type", client_models_1.Client)
], Register.prototype, "id_cliente", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    (0, typegoose_1.prop)({ type: mongoose_1.Schema.Types.ObjectId, ref: 'Procedure', required: true }),
    __metadata("design:type", procedure_models_1.Procedure)
], Register.prototype, "id_tramite", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], Register.prototype, "fecha", void 0);
exports.Register = Register = __decorate([
    (0, type_graphql_1.ObjectType)({ description: 'Register model' }),
    (0, typegoose_1.modelOptions)({ schemaOptions: { timestamps: true } })
], Register);
exports.RegisterModel = (0, typegoose_1.getModelForClass)(Register);
//# sourceMappingURL=register.models.js.map