//* Routing
 
//Es Manejar las solicitudes del cliente en base a ciertos criterios:
//El metodo y el path

//1- se importa el modulo http
const http = require('http')

//2-Se crea un archivo cursos.js y se exporta

//3-Importar el modulo cursos.js
const cursos = require('./cursos')

//4-Crear el servidor
const servidor = http.createServer((req, res) =>{

//*Implementar que va ocurrir cuando el servidor reciba una request:

//Extraer el metodo de la solicitud, mediante desestructuracion de objeto
const {method} = req

switch(method){
    case 'GET':
        case 'GET':
            return manejarSolicitudGET(req, res)
        case 'POST':
            return manejarSolicitudPOST(req, res)
        default:
            console.log(`El metodo no puede ser manejado por el servidor: ${method}`)
}
})

function manejarSolicitudGET(req, res){

    //Para seber el path sobre el que queremos actuar
    const path = req.url

    if(path === '/') {
        res.statusCode = 200 //*200 no es necesario porque se asigna por defecto
        //Enviar un respuesta
       return res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    } else if (path === '/cursos'){
        res.statusCode = 200
        //Se envia la informacion de todos los cursos en JSON
       return res.end(JSON.stringify(cursos.infoCursos))
    } else if(path === '/cursos/programacion'){
        //Se obtienen solo los cursos de programacions (filtrado)
        res.statusCode = 200
       return res.end(JSON.stringify(cursos.infoCursos.programacion))
    }

    //Manejo de un path incorrecto
    res.statusCode = 404
    return res.end('El recurso solicitado no existe...')
}

function manejarSolicitudPOST(req, res){
    //obtener el path
    const path = req.url
    if(path === '/cursos/programacion'){
        //*Como obtener el cuerpo de la solicitud
        let cuerpo = ''
        //evento on() data
        req.on('data', contenido => {
            //Se agrega el contenido de la solicitud a la variable cuerpo
            cuerpo += contenido.toString()
        } )
        //Cuendo se recibe la informacion, se procesa la informacion asignada 
        //a la variable cuerpo
        req.on('end', () =>{
            console.log(cuerpo)
            console.log(typeof cuerpo)
            return res.end('El servidor recibio una solicitud POST para /cursos/programacion')

            //
        })

        res.statusCode = 200
       // return res.end('El servidor recibio una solicitud POST para /cursos/programacion')
        //*Se crea un archivo index.http y se realiza una solicitud post con la extension rest client
    }

    

}


//5-Especificar el puerto
const puerto = 3000
servidor.listen(puerto, () =>{
    console.log(`Es servidor esta escuchando en el puerto ${puerto}...`)
})