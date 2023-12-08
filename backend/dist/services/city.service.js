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
exports.cityService = void 0;
const city_models_1 = require("../models/city.models");
exports.cityService = {
    abtenerTodaLasCiudades: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield city_models_1.CityModel.find().populate('id_pais');
    }),
    crearCiudad: (entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield city_models_1.CityModel.create(entity);
    }),
    obtenerCiudadPorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield city_models_1.CityModel.findById(id);
    }),
    eliminarCiudadPorId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield city_models_1.CityModel.findByIdAndDelete(id);
    }),
    actualizarCiudadPorId: (id, entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield city_models_1.CityModel.findByIdAndUpdate(id, entity, { new: true });
    })
};
//# sourceMappingURL=city.service.js.map