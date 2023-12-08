"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
const config_1 = require("../config");
exports.swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend Banco',
            version: '1.0.0',
            description: 'API REST que sirve los enpoint necesarios para el funcionamiento del banco'
        },
        servers: [
            {
                url: `http://${config_1.DOMAIN}:${config_1.PORT}`
            }
        ]
    },
    apis: ['./src/routes/*.ts']
};
//# sourceMappingURL=swaggerOptions.js.map