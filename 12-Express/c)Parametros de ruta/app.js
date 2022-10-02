
const express = require('express')
const app = express()

const {infoCursos} = require('./cursos.js')

app.get( '/', (req, res) =>{
    res.send('Mi primer servidor...')
})
app.get('/api/cursos/', (req, res) =>{
    res.send(JSON.stringify(infoCursos))
})

app.get('/api/cursos/programacion', (req, res) =>{
    res.send(JSON.stringify(infoCursos.programacion))
})

app.get('/api/cursos/matematicas', (req, res) =>{
    res.send(JSON.stringify(infoCursos.matematicas))
})


//*Parametros URL
//Se obtienen cada uno de los lenguajes de los cursos de programacion

//*Cursos de programacion
app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    //Se extrae el lenguaje de '/api/cursos/programacion/:lenguaje' y se lo asigna a un const 
    const lenguaje = req.params.lenguaje
    //filtrar la lista de cursos en base al lenguaje de programacion que se pasa como parametro URL
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)
    
    //Si no se encuentra el elemento que se pasa como parametro URL se ejecuta el siguiente codigo:
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }

    //Si se encuentra el parametro URL que se paso, se muestra lo siguiente en pantalla:
    res.send(JSON.stringify(resultados))

    //*En el navegador: Ej http://localhost:3000/api/cursos/programacion/python    => python es el parametro URL

})
//*Uso de DOS parametros URL (:lenguaje y :nivel)
app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel

    const resultados = infoCursos.programacion.filter( curso => curso.lenguaje === lenguaje && curso.nivel === nivel)

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
    }

    res.send(JSON.stringify(resultados))
})

//*Cursos de matematicas
app.get('/api/cursos/matematicas/:tema', (req, res) =>{
    const tema = req.params.tema
    
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema)

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`)
    }

    res.send(JSON.stringify(resultados))
})


const PUERTO = process.env.PORT || 3000
app.listen(PUERTO, (req, res) =>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})