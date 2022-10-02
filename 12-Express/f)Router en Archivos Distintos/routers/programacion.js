const express = require('express')

//Se importa la informacion relacionada a matematicas(Se remplaza la anotacion de puntos con {})
const {programacion} = require('../datos/cursos.js').infoCursos

const routerProgramacion = express.Router()

routerProgramacion.get('/', (req, res) =>{
    res.send(JSON.stringify(programacion))
})
//*En este caso solo se deja la parte del path que no tiene en comun con el router
routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje)
    
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

    const resultados = programacion.filter( curso => curso.lenguaje === lenguaje && curso.nivel === nivel)

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
    }

    res.send(JSON.stringify(resultados))
})
//*
module.exports = routerProgramacion