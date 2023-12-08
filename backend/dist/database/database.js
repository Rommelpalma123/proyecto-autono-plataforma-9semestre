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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = require("../config/index");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!index_1.MONGO_URI) {
            throw new Error('La variable de entorno MONGO_URI no está definida');
        }
        yield mongoose_1.default.connect(index_1.MONGO_URI);
        console.log('Conexión exitosa a MongoDB Atlas');
    }
    catch (error) {
        console.error('Error al conectar a MongoDB', error);
    }
});
exports.connectDB = connectDB;
//# sourceMappingURL=database.js.map