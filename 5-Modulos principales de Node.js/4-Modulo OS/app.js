//Este modulo no esta disponible de forma global se
//debe importar con require()

const os = require('os')

//Funcion type() Permite saber el tipo de sistema operativo en el
//cual se ejecuta nuestra aplicacion
console.log(os.type())

//Funcion homedir() Acceso al directorio principal del SO
console.log(os.homedir())

//Funcion uptime() muestra el tiempo que lleva ejecutandose el SO en segundos
console.log(os.uptime())

//Funcion userInfo()
console.log(os.userInfo())