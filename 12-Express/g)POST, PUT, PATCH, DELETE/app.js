const express = require('express')
const app = express()

const routerMatematicas = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas', routerMatematicas)

const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion)


const PUERTO = process.env.PORT || 3000
app.listen(PUERTO, (req, res) => {
    console.log(`El servidor esta escuchando en el puerto ${3000}...`)
})
