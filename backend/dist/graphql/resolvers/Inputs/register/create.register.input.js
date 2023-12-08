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
exports.CreateRegisterInput = void 0;
const type_graphql_1 = require("type-graphql");
const create_client_input_1 = require("../client/create.client.input");
const create_procedure_input_1 = require("../procedure/create.procedure.input");
let CreateRegisterInput = exports.CreateRegisterInput = class CreateRegisterInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", create_client_input_1.CreateClientInput)
], CreateRegisterInput.prototype, "id_cliente", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", create_procedure_input_1.CreateProcedureInput)
], CreateRegisterInput.prototype, "id_tramite", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], CreateRegisterInput.prototype, "fecha", void 0);
exports.CreateRegisterInput = CreateRegisterInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateRegisterInput);
//# sourceMappingURL=create.register.input.js.map