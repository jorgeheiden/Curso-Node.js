
const express = require('express')

const app = express()

const {infoCursos} = require('./cursos.js')

app.get('/', (req, res) => {
    res.send('Mi primer servidor')
})

//*Parametro Query 
//Se incluyen al final de la url separado por un signo de interrogacion
//y tienen un par clave - valor Ej ?ordenar=vista

//*En este ejemplo se ordenan los resultados en base al numero de vistas


app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)
    
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }

    //Se muestra el valor del parametro Query ORDENAR = VISTAS en consola  (El parametro ordenar se crea en esta linea y se le asigno valor en la URL)
    console.log(req.query.ordenar)

    //*En el navegador: Ej http://localhost:3000/api/cursos/programacion/python?ordenar=vistas  => 

    //*Se ordenan los cursos por numero de vistas
    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort( (a, b) => a.vistas - b.vistas)))
    }

    res.send(JSON.stringify(resultados))
})


const PUERTO = process.env.PORT || 3000
app.listen(PUERTO, (req, res) => {
    console.log(`El servidor esta escuchando en el pueto ${3000}...`)
})