//* Probando Nodemon //Ejecucion (en la terminal): nodemon app.js

//*Si da error en la termina ejecutarlo en el prompt

const http = require('http')

const servidor = http.createServer( (req, res) =>{
    res.end('Hola mundo')
})

const puerto = 3000

servidor.listen(puerto, () =>{
    console.log(`El servidor esta escuchando en el puerto: ${puerto}`)
})