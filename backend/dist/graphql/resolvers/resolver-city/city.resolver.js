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
exports.CityResolver = void 0;
const type_graphql_1 = require("type-graphql");
const index_models_1 = require("../../../models/index.models");
const create_city_input_1 = require("../Inputs/city/create.city.input");
const city_service_1 = require("../../services/city.service");
const update_city_input_1 = require("../Inputs/city/update.city.input");
let CityResolver = exports.CityResolver = class CityResolver {
    constructor(cityService) {
        this.cityService = cityService;
        this.cityService = new city_service_1.CityService();
    }
    createCity(createCityInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cityService.createCity(createCityInput);
        });
    }
    allCities() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cityService.findAllCities();
        });
    }
    findCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cityService.findOneCity(id);
        });
    }
    deleteCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cityService.deleteCity(id);
        });
    }
    updateCity(id, updateCityInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cityService.updateCity(id, updateCityInput);
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.City),
    __param(0, (0, type_graphql_1.Arg)('createCity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_city_input_1.CreateCityInput]),
    __metadata("design:returntype", Promise)
], CityResolver.prototype, "createCity", null);
__decorate([
    (0, type_graphql_1.Query)(() => [index_models_1.City], { name: 'allCities' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CityResolver.prototype, "allCities", null);
__decorate([
    (0, type_graphql_1.Query)(() => index_models_1.City, { name: 'findCityById' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CityResolver.prototype, "findCity", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.City, { name: 'deleleCity' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CityResolver.prototype, "deleteCity", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.City, { name: 'updateCity' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('updateCityInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_city_input_1.UpdateCityInput]),
    __metadata("design:returntype", Promise)
], CityResolver.prototype, "updateCity", null);
exports.CityResolver = CityResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => index_models_1.City),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CityResolver);
//# sourceMappingURL=city.resolver.js.map