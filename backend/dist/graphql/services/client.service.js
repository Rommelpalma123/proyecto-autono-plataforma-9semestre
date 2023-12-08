"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.ClientService = void 0;
const client_models_1 = require("../../models/client.models");
const generateToken_1 = require("../../utils/generateToken");
const bcrypt = __importStar(require("bcrypt"));
class ClientService {
    createClient(createClientInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const newClient = client_models_1.ClientModel.create(createClientInput);
            return (yield newClient).save();
        });
    }
    findAllClient() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield client_models_1.ClientModel.find();
        });
    }
    findOneClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = client_models_1.ClientModel.findById(id);
            if (!client) {
                throw new Error('Client not found');
            }
            return client;
        });
    }
    deleteClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield client_models_1.ClientModel.findByIdAndDelete(id);
            if (!client) {
                throw new Error('Client not found to delete');
            }
            return client;
        });
    }
    updateClient(id, updateClientInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateClient = yield client_models_1.ClientModel.findByIdAndUpdate(id, updateClientInput, { new: true });
            if (!updateClient) {
                throw new Error('Client not found to update');
            }
            yield updateClient.save();
            return updateClient;
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield client_models_1.ClientModel.findOne({ email });
            if (client && (yield bcrypt.compare(password, client.password))) {
                const token = (0, generateToken_1.generateToken)(client.id);
                return { client, token };
            }
            return { client: new client_models_1.Client(), token: 'null' };
        });
    }
}
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map