import  Express from 'express'
import { AlumnoRouter } from './Alumno/alumno.routes.js';
import { DocenteRouter } from './Docente/docenteroutes.js';
import { MateriaRouter } from './Materias/materiasroutes.js';
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./swagger";
import { sanitizeAlumnoInput } from './Alumno/alumno.controler.js';


const app = Express()

app.use(Express.json())




app.use('/api/alumnos',AlumnoRouter)
app.use('/api/docentes',DocenteRouter)
app.use('/api/materia',MateriaRouter)
app.use('/documentation',swaggerUi.serve, swaggerUi.setup(swaggerSetup))
app.use((_,res)=>{
    return res.status(404).send({message:
    'Resource not found'})
})

app.listen(3000,()=> {
    console.log('Server running on http://localhost:3000/')
})

