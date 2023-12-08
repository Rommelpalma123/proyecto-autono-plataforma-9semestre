"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
const city_routes_1 = __importDefault(require("./city.routes"));
const country_routes_1 = __importDefault(require("./country.routes"));
const register_routes_1 = __importDefault(require("./register.routes"));
const client_routes_1 = __importDefault(require("./client.routes"));
const account_routes_1 = __importDefault(require("./account.routes"));
const procedure_routes_1 = __importDefault(require("./procedure.routes"));
exports.allRoutes = {
    ciudadRouter: city_routes_1.default,
    paisRouter: country_routes_1.default,
    registroRouter: register_routes_1.default,
    clienteRouter: client_routes_1.default,
    tipoCuentaRouter: account_routes_1.default,
    tramiteRouter: procedure_routes_1.default
};
//# sourceMappingURL=index.routes.js.map