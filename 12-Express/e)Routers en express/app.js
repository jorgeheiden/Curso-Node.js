
const express = require('express')
const app = express()

const {infoCursos} = require('./cursos.js')

//*Routers => Permiten reutilizar la parte inicial del path en una url

//1-Crear un Router => cada router tiene un nombre especifico que se asigna
//a una const, porque este va a tener un path especifico asociado
const routerProgramacion = express.Router()
const routerMatematicas = express.Router()

//2-Asociar el Router a un Path especifico con use() 
app.use('/api/cursos/programacion', routerProgramacion)
app.use('/api/cursos/matematicas', routerMatematicas)

//3-Se remplaza app.get() por el router: routerProgramacion.get()
//Se remplaza el path por solo una barra: '/'
routerProgramacion.get('/', (req, res) =>{
    res.send(JSON.stringify(infoCursos.programacion))
})
//*En este caso solo se deja la parte del path que no tiene en comun con el router
routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)
    
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }

    console.log(req.query.ordenar)

    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort( (a, b) => a.vistas - b.vistas)))
    }

    res.send(JSON.stringify(resultados))
})
//*Se deja la parte del path que no tiene en comun con el router
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel

    const resultados = infoCursos.programacion.filter( curso => curso.lenguaje === lenguaje && curso.nivel === nivel)

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
    }

    res.send(JSON.stringify(resultados))
})

//*Cursos de matematicas
routerMatematicas.get('/:tema', (req, res) =>{
    const tema = req.params.tema
    
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema)

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`)
    }

    res.send(JSON.stringify(resultados))
})



const PUERTO = process.env.PORT || 3000
app.listen(PUERTO, (req, res) => {
    console.log(`El servidor esta escuchando en el puerto ${3000}...`)
})