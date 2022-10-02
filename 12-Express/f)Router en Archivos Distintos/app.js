const express = require('express')
const app = express()
const {infoCursos} = require('./datos/cursos.js')

//*Importar los router a la aplicacion principal
const routerMatematicas = require('./routers/matematicas.js')
//Asociar el router a un path
app.use('/api/cursos/matematicas', routerMatematicas)

const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion)

//*Como separar distintos routers en distintos archivos, modulos

//1-Se crea una carpeta llamada routers con dos archivos:
//Un router para matematicas.js y uno para programacion.js

//2-Se crean los router en esos archivos

//4-Se crea una carpeta datos donde estan los cursos

//5-Se exportan los routers


const PUERTO  = process.env.PORT || 3000
app.listen(PUERTO, (req, res) => {
    console.log(`El servidor esta escuchandor en el puerto ${PUERTO}...`)
})