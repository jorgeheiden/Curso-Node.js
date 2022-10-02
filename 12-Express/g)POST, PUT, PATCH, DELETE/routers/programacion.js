const express = require('express')

const {programacion} = require('../datos/cursos.js').infoCursos

const routerProgramacion = express.Router()

//*MIDDLEWARE
//*Permite procesar el cuerpo de la solicitud en formato JSON
routerProgramacion.use(express.json())

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

    res.send(resultados)
})
//*Se deja la parte del path que no tiene en comun con el router
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel

    const resultados = programacion.filter( curso => curso.lenguaje === lenguaje && curso.nivel === nivel)

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
    }

    res.send(resultados)
})

//*Metodo POST: se agrega un curso nuevo
routerProgramacion.post('/', (req, res) =>{
    //Se extrae el cuerpo(body) de la solicitud con el nuevo curso
    let cursoNuevo = req.body
    //Se agrega el curso nuevo a programacion
    programacion.push(cursoNuevo)
    //Envia el nuevo arreglo de cursos al cliente(lo muestra en pantalla)
    res.send(programacion)
    //*Se crea un archivo index.http para simular una solicitud POST
    //*Se Establece el MIDDLEWARE al comienzo del codigo
})

//*Metodo PUT (Actualizar una entidad completa)
routerProgramacion.put('/:id', (req, res) => {
    //Se extrae el body
    const cursoActualizado = req.body
    //Se extrae el id del curso que se envia en el parametro URL
    const id = req.params.id

    //*Se busca el indice del curso con findIndex() 
    //se obtiene el indice comparando el indice del arreglo con el 
    //indice que se envia como PARAMETRO URL
    const indice = programacion.findIndex(curso => curso.id == id)  //IMPORTANTE USAR ==
    
    //Se verifica si se encontro el elemento. Si se encuentre se
    //Remplaza el objeto del arreglo programacion en cursos
    if ( indice >= 0){
        programacion[indice] = cursoActualizado
    }
    res.send(programacion)
})

//*Metodo PATCH (Permite pasar pares clave valor especificos, que se quieren actualizar)
routerProgramacion.patch('/:id', (req, res) => {
    //Se extrae del body la informacion que se quiere actualizar
    const infoActualizada = req.body
    //Se extrae el id
    const id = req.params.id
    //Se extrae el indice del curso
    const indice = programacion.findIndex(curso => curso.id == id)

    if(indice >= 0){
        const cursoAModificar = programacion[indice]
        //Se utiliza este metodo que permite modificar solo 
        //algunas propiedades de un objeto
        Object.assign(cursoAModificar, infoActualizada)
    }
    res.send(programacion)
})

//*Metodo DELETE
routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id;

    const indice = programacion.findIndex( curso => curso.id == id)

    if(indice >= 0){
        programacion.splice(indice, 1)
    }
    res.send(programacion)
})


//*
module.exports = routerProgramacion
