"use strict";
/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints relacionados con ciudades
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @swagger
 * /api/cliente:
 *   post:
 *     summary: Crear una nueva ciudad
 *     description: Crear una nueva ciudad con la información proporcionada
 *     tags: [Clientes]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nombre: Nombre del cliente
 *             cedula: Cedula del cliente
 *             edad: Edad del cliente
 *             email: Escriba el email
 *             password: Escribe la contraseña
 *             id_pais: id del pais
 *     responses:
 *       201:
 *         description: Ciudad creada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Ciudad creada
 */
/**
 * @swagger
 * /api/cliente:
 *   get:
 *     summary: Obtener todas las ciudades
 *     description: Recuperar información sobre todas las ciudades
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             example:
 *               ciudades: [Lista de ciudades]
 */
/**
 * @swagger
 * /api/cliente/{idCliente}:
 *   get:
 *     summary: Obtener información de un cliente
 *     description: Recuperar información detallada sobre un cliente específico
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: idCliente
 *         description: ID del cliente a recuperar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             example:
 *               client: Información del cliente
 */
/**
 * @swagger
 * /api/cliente/{idCliente}:
 *   put:
 *     summary: Actualizar información de un cliente
 *     description: Actualizar la información de un cliente específico con los datos proporcionados
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: idCliente
 *         description: ID del cliente a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nombre: Nombre del cliente
 *             cedula: Cedula del cliente
 *             edad: Edad del cliente
 *             id_pais: id del pais
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Cliente actualizado
 */
/**
 * @swagger
 * /api/cliente/{idCliente}:
 *   delete:
 *     summary: Eliminar una ciudad
 *     description: Eliminar una ciudad específica según su ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: idCliente
 *         description: ID del cliente a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente eliminado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Cliente eliminado
 */
/**
 * @swagger
 * /api/cliente/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Iniciar sesión con correo electrónico y contraseña
 *     tags: [Clientes]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             email: correo@ejemplo.com
 *             password: contraseña
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             example:
 *               message: Inicio de sesión exitoso
 *               client: Información del cliente
 *       401:
 *         description: Credenciales incorrectas
 *         content:
 *           application/json:
 *             example:
 *               message: Credenciales incorrectas
 */
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
const router = (0, express_1.Router)();
router.post('/cliente', client_controller_1.clienteController.nuevoCliente);
router.get('/cliente', client_controller_1.clienteController.mostrarClientes);
router.get('/cliente/:idCliente', client_controller_1.clienteController.mostrarCliente);
router.put('/cliente/:idCliente', client_controller_1.clienteController.actualizarCliente);
router.delete('/cliente/:idCliente', client_controller_1.clienteController.eliminarCliente);
router.post('/cliente/login', client_controller_1.clienteController.iniciarSession);
exports.default = router;
//# sourceMappingURL=client.routes.js.map