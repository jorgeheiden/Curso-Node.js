//*Extension REST CLIENT: Permite probar el servidor realizando solicitudes
//con distintod metodos (get,post,put,etc)
//*Uso: Se debe crear un archivo index.http con el metodo y la direccion click en send request

//*1-Se importa el modulo http
const { Console } = require('console')
const http = require('http')

//*2-Se crea un servidor
const servidor = http.createServer((req, res) => {
//*OBJETO REQUEST
//request  => contiene la informacion de la solicitud que
//realizo el cliente al servicor
//Estructura de una solicitud: 1)url 2)metodo 3)header
console.log('===> req (solicitud)')

//Al ingresan en el navegador a locahost:3000 se despliegan todas las
//propiedades de request en la terminal
//*console.log(req)

//*Algunas propiedades, las mas importante de request:

//a)Retorna la url de la pagina
console.log(req.url) // /
//b)Retorna el metodo
console.log(req.method) //get
//c)Retorna el header
console.log(req.headers)

//*OBJETO RESPONSE

//*console.log(res)

//*Propiedades mas importantes de response:

//a)Codigo de estado
console.log(res.statusCode) //200 Ok

//b)Cambiar el codigo de estado
res.statusCode = 404
console.log(res.statusCode) //404

//c) Configurar un elemento del header
//En este ejemplo el tipo de archivo que se esta enviando en el header
res.setHeader("content-type", "application/json")

//d)Ver los elementos del header
console.log(res.getHeaders())

res.end("Hola Mundo")
})
//*

//*3-Especificar el puerto e iniciar el servidor

const puerto = 3000

servidor.listen(puerto, () =>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
})