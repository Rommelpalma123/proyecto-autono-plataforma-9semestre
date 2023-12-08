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
exports.CityModel = exports.City = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
const country_models_1 = require("./country.models");
let City = exports.City = class City {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], City.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    (0, typegoose_1.prop)({ type: mongoose_1.Schema.Types.ObjectId, ref: 'Country', required: true }),
    __metadata("design:type", country_models_1.Country)
], City.prototype, "id_pais", void 0);
exports.City = City = __decorate([
    (0, type_graphql_1.ObjectType)({ description: 'City model' }),
    (0, typegoose_1.modelOptions)({ schemaOptions: { timestamps: true } })
], City);
exports.CityModel = (0, typegoose_1.getModelForClass)(City);
//# sourceMappingURL=city.models.js.map