//*Crear un Proyecto

//1-Express es un paquete se utiliza npm: 
//a)inicializar nuestro paquete: npm init
//b)Asignar nombre a la carpeta servidor-express en este caso
//c)version => enter
//e)descripcion => escribir una descripcion
//f)entry point: app.js
//g)test command => enter las de mas opciones => enter
//h)author: mi nombre

//2-Instalar Express: npm install express

//3-Importar express
const express = require('express')

//4-Acceder a la funcion express() esta permite crear un aplicacion
//de express
const app = express()

//5-En este ejemplo se simula una base de datos en el archivo cursos.js

//6-Importar cusrso.js
const {infoCursos} = require('./cursos.js')

//*7-Manejo de rutas (Routing)
//Metodo http get() y el Path(SE CREA LA RUTA) y 
//una funcion como argumento
app.get('/', (req, res) =>{
    //se envia una respuesta
    res.send('Mi primer servidor...')
});

//*Agregar rutas
app.get('/api/cursos', (req, res) => {
    //se envia una respuesta
    res.send(JSON.stringify(infoCursos))
})

//Se crea otra ruta para obtener solo los cursos de progamacion
app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion))
})
//se crea otra ruta para obtener solo los cursos de matematica
app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas))
})


//8-Definir el puerto de escucha
//Al deployar la aplicacion se utiliza process.env.PORT pero
//Al estar desarrollando la aplicacion de manera local se puede
//asignar un numero de puerto
const PUERTO = process.env.PORT || 3000
app.listen(PUERTO, () =>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
})



