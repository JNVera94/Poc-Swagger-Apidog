import { Router } from "express";
import { sanitizeAlumnoInput,findAll, findOne,add,update,remove } from "./alumno.controler.js";
import swaggerJSDoc from "swagger-jsdoc";

export const AlumnoRouter = Router()


/**
 * @swagger
 * /api/alumnos:
 *   get:
 *     summary: Obtener todos los alumnos
 *     description: Obtener todos los alumnos
 *     responses:
 *       '200':
 *         description: Éxito
 *   post:
 *     summary: Agregar un nuevo alumno
 *     description: Agregar un nuevo alumno
 *     responses:
 *       '201':
 *         description: Creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/alumnos'
 * /api/alumnos/{_id}:
 *   get:
 *     summary: Encontrar alumno por id
 *     description: Devuelve un único alumno
 *     operationId: getAlumnoById
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: ID del alumno a devolver
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/alumnos'
 *   delete:
 *     summary: Elimina un alumno
 *     description: Elimina un alumno por id
 *     operationId: deleteAlumno
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: ID del alumno a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '400':
 *         description: ID inválida
 *   put:
 *     summary: Modifica a un alumno
 *     description: Modifica un alumno por id
 *     operationId: UpdateAlumno
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: ID del alumno a modificar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Actualizar un alumno existente
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/alumnos'
 *     responses:
 *       '400':
 *         description: ID inválida
 */
AlumnoRouter.get('/',findAll)
AlumnoRouter.get('/:id',findOne)
AlumnoRouter.post('/',sanitizeAlumnoInput,add)
AlumnoRouter.put('/:id',sanitizeAlumnoInput,update)
AlumnoRouter.patch('/:id',sanitizeAlumnoInput,update)
AlumnoRouter.delete('/:id',remove)