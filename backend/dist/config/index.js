"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET = exports.DOMAIN = exports.PORT = exports.MONGO_URI = void 0;
const dotenv_1 = require("dotenv");
const ip_1 = require("ip");
if (process.env.NODE_ENV === 'production') {
    (0, dotenv_1.config)({ path: '.env.production' });
}
else {
    (0, dotenv_1.config)({ path: '.env' });
}
// Exporta las variables de entorno
exports.MONGO_URI = process.env.MONGO_URI;
exports.PORT = process.env.PORT;
exports.DOMAIN = process.env.DOMAIN === 'localhost' ? (0, ip_1.address)() : process.env.DOMAIN;
exports.SECRET = process.env.SECRET;
//# sourceMappingURL=index.js.map