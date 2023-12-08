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
exports.Server = void 0;
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const apollo_server_express_1 = require("apollo-server-express");
const database_1 = require("./database/database");
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
const apollo_server_core_1 = require("apollo-server-core");
const index_1 = require("./graphql/resolvers/index");
const socket_io_1 = require("socket.io");
const index_routes_1 = require("./routes/index.routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const index_2 = require("./docs/index");
const socket_1 = require("./socket");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        (0, database_1.connectDB)();
        this.configuration();
        this.middlewares();
        this.routes();
        this.apolloServer();
    }
    configuration() {
        this.app.set('port', process.env.PORT || 4000);
        const spec = (0, swagger_jsdoc_1.default)(index_2.swaggerOptions);
        this.app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(spec));
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    apolloServer() {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = yield (0, type_graphql_1.buildSchema)({
                resolvers: index_1.resolvers,
                emitSchemaFile: path_1.default.join(__dirname, 'schema.gql')
            });
            const server = new apollo_server_express_1.ApolloServer({
                schema,
                plugins: [apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground]
            });
            yield server.start();
            server.applyMiddleware({ app: this.app });
            return this.app;
        });
    }
    routes() {
        this.app.get('/', (_req, res) => {
            res.status(200).json({
                name: 'API REST BANCO'
            });
        });
        this.app.use('/api', index_routes_1.allRoutes.ciudadRouter, index_routes_1.allRoutes.clienteRouter, index_routes_1.allRoutes.paisRouter, index_routes_1.allRoutes.registroRouter, index_routes_1.allRoutes.tipoCuentaRouter, index_routes_1.allRoutes.tramiteRouter);
    }
    listen() {
        const server = http_1.default.createServer(this.app);
        const io = new socket_io_1.Server(server, {
            cors: { origin: '*' }
        });
        (0, socket_1.createSocketServer)(io);
        server.listen(this.app.get('port'), () => {
            console.log(`Server está corriendo en el puerto http://localhost:${this.app.get('port')}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map