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
exports.createSocketServer = void 0;
const procedure_service_1 = require("../services/procedure.service");
function createSocketServer(io) {
    io.on('connection', (socket) => {
        console.log('Nuevo cliente conectado');
        const emitTramites = () => __awaiter(this, void 0, void 0, function* () {
            const tramites = yield procedure_service_1.procedureModelService.abtenerTodoLosTramites();
            socket.emit('server:loadtramites', tramites);
        });
        emitTramites();
        socket.on('client:realizar-tramite', (data) => __awaiter(this, void 0, void 0, function* () {
            socket.broadcast.emit('client:realizar-tramite', data);
            const newTramite = yield procedure_service_1.procedureModelService.crearTramite(data);
            io.emit('server:realizar-tramite', newTramite);
        }));
        socket.on('cliente:delete-tramite', (id) => __awaiter(this, void 0, void 0, function* () {
            yield procedure_service_1.procedureModelService.eliminarTramitePorId(id);
            io.emit('server:delete-tramite', id);
        }));
        socket.on('disconnect', () => {
            console.log('Cliente desconectado');
        });
        io.on('connection_error', (error) => {
            console.log('Error en el socket', error.req);
            console.log(error.code);
            console.log(error.message);
        });
    });
}
exports.createSocketServer = createSocketServer;
//# sourceMappingURL=index.js.map