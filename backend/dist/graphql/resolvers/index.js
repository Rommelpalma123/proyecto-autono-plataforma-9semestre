"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const user_resolvers_1 = require("./user.resolvers");
const account_resolver_1 = require("./resolver-account/account.resolver");
const city_resolver_1 = require("./resolver-city/city.resolver");
const client_resolver_1 = require("./resolver-client/client.resolver");
const country_resolver_1 = require("./resolver-country/country.resolver");
const procedure_resolver_1 = require("./resolver-procedure/procedure.resolver");
const register_resolver_1 = require("./resolver-register/register.resolver");
exports.resolvers = [
    user_resolvers_1.UserResolver,
    account_resolver_1.AccountResolver,
    city_resolver_1.CityResolver,
    client_resolver_1.ClientResolver,
    country_resolver_1.CountryResolver,
    procedure_resolver_1.ProcedureResolver,
    register_resolver_1.RegisterResolver
];
//# sourceMappingURL=index.js.map