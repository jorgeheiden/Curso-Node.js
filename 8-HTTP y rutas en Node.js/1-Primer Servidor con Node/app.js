//*Crear un servidor

//*Modulo http:
//Este modulo le permite a Node.js transmitir informacion con
//el protocolo HTTP. 
//Este modulo permite escribir un servidor, que escuche las
//solicitudes

//*1- importar el modulo http
const http = require('http')

//*2-Crear un Servidor
//Se utiliza el metodo createServer() del modulo http para
//crear un servido y cada ves que reciba una solicitud va a ejecutar
//la funcion que se la pasa como argumento, esta tiene dos
//argumentos REQUEST(solicitud http) Y RESPONSE(respuesta http)
//El servidor se guarda en una const servidor
const servidor = http.createServer( (req, res) => {
    console.log('nueva solicitud')
   //Metodo que permite enviar la respuesta al cliente 
    res.end('Hola mundo');
});

//*3-Especificar el puerto e iniciar el servidor
//Al crear el servidor este ESCUCHA las solicitudes del cliente y para
//eso se debe establecer un puerto

//Se utiliza el metodo listen() para escuchar las solicitudes y se
//Establece el PUERTO como primer argumento para ese fin.
//El segundo argumento es una funcion flecha, que define que va ocurrir
//cuando el servidor comienze a ejecutarse y escuchar las solicitudes

const puerto = 3000

servidor.listen(puerto, () =>{
    console.log(`El servidor esta escuchando en  http://localhost:${puerto}`)
})

//*4-Como ejecutar el servidor para que escuche las solicitudes
//En la terminal: node app.js

//*5-En el navegador: localhost:3000 para ver la respuesta a la solicitud
//Cada ves que se recarga la pagina se realiza una nueva solicitud

//* ctrl + c: detiene el servidor