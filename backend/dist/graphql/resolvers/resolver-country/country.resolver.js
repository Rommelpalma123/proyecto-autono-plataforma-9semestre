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
exports.CountryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const index_models_1 = require("../../../models/index.models");
const create_country_input_1 = require("../Inputs/country/create.country.input");
const country_service_1 = require("../../services/country.service");
const update_country_input_1 = require("../Inputs/country/update.country.input");
let CountryResolver = exports.CountryResolver = class CountryResolver {
    constructor(countryService) {
        this.countryService = countryService;
        this.countryService = new country_service_1.CountryService();
    }
    createCountry(createCountryInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.countryService.createCountry(createCountryInput);
        });
    }
    allCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.countryService.findAllCountry();
        });
    }
    findCountry(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.countryService.findOneCountry(id);
        });
    }
    deleteCountry(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.countryService.deleteCountry(id);
        });
    }
    updateCountry(id, updateCountryInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.countryService.updateCountry(id, updateCountryInput);
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Country),
    __param(0, (0, type_graphql_1.Arg)('createCountry')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_country_input_1.CreateCountryInput]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "createCountry", null);
__decorate([
    (0, type_graphql_1.Query)(() => [index_models_1.Country], { name: 'allCountry' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "allCountry", null);
__decorate([
    (0, type_graphql_1.Query)(() => index_models_1.Country, { name: 'findCountryById' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "findCountry", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Country, { name: 'deleleCountry' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "deleteCountry", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => index_models_1.Country, { name: 'updateCountry' }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('updateCountryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_country_input_1.UpdateCountryInput]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "updateCountry", null);
exports.CountryResolver = CountryResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => index_models_1.Country),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryResolver);
//# sourceMappingURL=country.resolver.js.map