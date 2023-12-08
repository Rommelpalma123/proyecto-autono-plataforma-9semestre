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
exports.CityService = void 0;
const city_models_1 = require("../../models/city.models");
class CityService {
    createCity(createCityInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCity = city_models_1.CityModel.create(createCityInput);
            return (yield newCity).save();
        });
    }
    findAllCities() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield city_models_1.CityModel.find();
        });
    }
    findOneCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const city = city_models_1.CityModel.findById(id);
            if (!city) {
                throw new Error('city not found');
            }
            return city;
        });
    }
    deleteCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const city = yield city_models_1.CityModel.findByIdAndDelete(id);
            if (!city) {
                throw new Error('city not found to delete');
            }
            return city;
        });
    }
    updateCity(id, updateCityInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateCity = yield city_models_1.CityModel.findByIdAndUpdate(id, updateCityInput, {
                new: true
            });
            if (!updateCity) {
                throw new Error('city not found to update');
            }
            yield updateCity.save();
            return updateCity;
        });
    }
}
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map