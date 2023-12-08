"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
const generateToken = (id) => {
    const token = (0, jsonwebtoken_1.sign)({
        id
    }, config_1.SECRET, {
        expiresIn: '7d'
    });
    return token;
};
exports.generateToken = generateToken;
//# sourceMappingURL=generateToken.js.map