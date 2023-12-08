"use strict";
/**
 * @swagger
 * tags:
 *   name: TipoCuenta
 *   description: Endpoints relacionados con cuentas
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @swagger
 * /api/tipocuenta:
 *   post:
 *     summary: Crear una nueva ciudad
 *     description: Crear una nueva ciudad con la información proporcionada
 *     tags: [TipoCuenta]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nombre: Nombre del cliente
 *             cedula: Cedula del cliente
 *             edad: Edad del cliente
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
 * /api/tipocuenta:
 *   get:
 *     summary: Obtener todas las ciudades
 *     description: Recuperar información sobre todas las ciudades
 *     tags: [TipoCuenta]
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
 * /api/tipocuenta/{idTipocuenta}:
 *   get:
 *     summary: Obtener información de un cliente
 *     description: Recuperar información detallada sobre un cliente específica
 *     tags: [TipoCuenta]
 *     parameters:
 *       - in: path
 *         name: idTipocuenta
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
 * /api/tipocuenta/{idTipocuenta}:
 *   put:
 *     summary: Actualizar información de un cliente
 *     description: Actualizar la información de un cliente específico con los datos proporcionados
 *     tags: [TipoCuenta]
 *     parameters:
 *       - in: path
 *         name: idTipocuenta
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
 * /api/tipocuenta/{idTipocuenta}:
 *   delete:
 *     summary: Eliminar una ciudad
 *     description: Eliminar una ciudad específica según su ID
 *     tags: [TipoCuenta]
 *     parameters:
 *       - in: path
 *         name: idTipocuenta
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
const express_1 = require("express");
const account_controller_1 = require("../controllers/account.controller");
const router = (0, express_1.Router)();
router.post('/tipocuenta', account_controller_1.tipoCuentaController.nuevoTipocuenta);
router.get('/tipocuenta', account_controller_1.tipoCuentaController.mostrarTipocuentas);
router.get('/tipocuenta/:idTipocuenta', account_controller_1.tipoCuentaController.mostrarTipocuenta);
router.put('/tipocuenta/:idTipocuenta', account_controller_1.tipoCuentaController.actualizarTipocuenta);
router.delete('/tipocuenta/:idTipocuenta', account_controller_1.tipoCuentaController.eliminarTipocuenta);
exports.default = router;
//# sourceMappingURL=account.routes.js.map