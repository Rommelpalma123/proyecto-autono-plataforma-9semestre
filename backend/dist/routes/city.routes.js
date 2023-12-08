"use strict";
/**
 * @swagger
 * tags:
 *   name: Ciudades
 *   description: Endpoints relacionados con ciudades
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @swagger
 * /api/ciudad:
 *   post:
 *     summary: Crear una nueva ciudad
 *     description: Crear una nueva ciudad con la información proporcionada
 *     tags: [Ciudades]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nombre: Nombre de la Ciudad
 *             poblacion: Población de la Ciudad
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
 * /api/ciudad:
 *   get:
 *     summary: Obtener todas las ciudades
 *     description: Recuperar información sobre todas las ciudades
 *     tags: [Ciudades]
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
 * /api/ciudad/{idCiudad}:
 *   get:
 *     summary: Obtener información de una ciudad
 *     description: Recuperar información detallada sobre una ciudad específica
 *     tags: [Ciudades]
 *     parameters:
 *       - in: path
 *         name: idCiudad
 *         description: ID de la ciudad a recuperar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             example:
 *               ciudad: Información de la ciudad
 */
/**
 * @swagger
 * /api/ciudad/{idCiudad}:
 *   put:
 *     summary: Actualizar información de una ciudad
 *     description: Actualizar la información de una ciudad específica con los datos proporcionados
 *     tags: [Ciudades]
 *     parameters:
 *       - in: path
 *         name: idCiudad
 *         description: ID de la ciudad a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nombre: Nuevo nombre de la Ciudad
 *             poblacion: Nueva población de la Ciudad
 *     responses:
 *       200:
 *         description: Ciudad actualizada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Ciudad actualizada
 */
/**
 * @swagger
 * /api/ciudad/{idCiudad}:
 *   delete:
 *     summary: Eliminar una ciudad
 *     description: Eliminar una ciudad específica según su ID
 *     tags: [Ciudades]
 *     parameters:
 *       - in: path
 *         name: idCiudad
 *         description: ID de la ciudad a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ciudad eliminada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Ciudad eliminada
 */
const express_1 = require("express");
const city_controller_1 = require("../controllers/city.controller");
const router = (0, express_1.Router)();
router.post('/ciudad', city_controller_1.ciudadController.nuevaCiudad);
router.get('/ciudad', city_controller_1.ciudadController.mostrarCiudades);
router.get('/ciudad/:idCiudad', city_controller_1.ciudadController.mostrarCiudad);
router.put('/ciudad/:idCiudad', city_controller_1.ciudadController.actualizarCiudad);
router.delete('/ciudad/:idCiudad', city_controller_1.ciudadController.eliminarCiudad);
exports.default = router;
//# sourceMappingURL=city.routes.js.map