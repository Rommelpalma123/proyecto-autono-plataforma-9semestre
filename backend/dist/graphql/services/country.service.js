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
exports.CountryService = void 0;
const country_models_1 = require("../../models/country.models");
class CountryService {
    createCountry(createClientInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCountry = country_models_1.CountryModel.create(createClientInput);
            return (yield newCountry).save();
        });
    }
    findAllCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield country_models_1.CountryModel.find();
        });
    }
    findOneCountry(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = country_models_1.CountryModel.findById(id);
            if (!country) {
                throw new Error('country not found');
            }
            return country;
        });
    }
    deleteCountry(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield country_models_1.CountryModel.findByIdAndDelete(id);
            if (!country) {
                throw new Error('country not found to delete');
            }
            return country;
        });
    }
    updateCountry(id, updatePaisInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateCountry = yield country_models_1.CountryModel.findByIdAndUpdate(id, updatePaisInput, {
                new: true
            });
            if (!updateCountry) {
                throw new Error('country not found to update');
            }
            yield updateCountry.save();
            return updateCountry;
        });
    }
}
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map