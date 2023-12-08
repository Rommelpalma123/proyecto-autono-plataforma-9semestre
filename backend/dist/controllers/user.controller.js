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
exports.userController = void 0;
const bcrypt = require('bcrypt');
const user_service_1 = require("../services/user.service");
exports.userController = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password, phone, name, surname } = req.body;
            if (!email || !password || !phone || !name || !surname) {
                return res.status(400).json({ error: 'Faltan campos requeridos' });
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res
                    .status(400)
                    .json({ error: 'El correo electrónico no es válido' });
            }
            if (phone.length !== 10) {
                return res
                    .status(400)
                    .json({ error: 'El teléfono debe tener 10 dígitos' });
            }
            const existingUser = yield user_service_1.userService.findOne({ email });
            if (existingUser) {
                return res
                    .status(400)
                    .json({ error: 'El correo electrónico ya está registrado' });
            }
            const hashedPassword = yield bcrypt.hash(password, 10);
            req.body.password = hashedPassword;
            yield user_service_1.userService.create(req.body);
            return res
                .status(200)
                .json({ message: 'Usuario registrado exitosamente' });
        }
        catch (error) {
            return res.status(500).json({ error: 'Error al registrar el usuario' });
        }
    })
};
//# sourceMappingURL=user.controller.js.map