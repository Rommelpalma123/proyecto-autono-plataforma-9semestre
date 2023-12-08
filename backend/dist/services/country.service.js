"use strict";
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
exports.countryService = void 0;
const country_models_1 = require("../models/country.models");
exports.countryService = {
    abtenerTodoLosPaises: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield country_models_1.CountryModel.find();
    }),
    crearPais: (entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield country_models_1.CountryModel.create(entity);
    }),
    obtenerPaisPorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield country_models_1.CountryModel.findById(id);
    }),
    eliminarPaisPorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield country_models_1.CountryModel.findByIdAndDelete(id).exec();
    }),
    actualizarPaisPorId: (id, entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield country_models_1.CountryModel.findByIdAndUpdate(id, entity, { new: true });
    })
};
//# sourceMappingURL=country.service.js.map