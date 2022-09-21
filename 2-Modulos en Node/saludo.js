/*
Modulo:
Funcionalidad organizada en uno o varios archivos JavaScript que
puede ser reutilizada en una aplicacion
*/

/*
Crear un modulo: Un modulo en la practica es un archivo JavaScript,
cualquier archivo js que se usa en el programa es un modulo

-Se crean dos modulos:
1-app.js > Aqui se llama a la funcion
2-saludo.js > contiene la definicion de la funcion
*/

function saludar(nombre) {
    return `Hola ${nombre}`
}

/*
-Importar y Exportar un modulo:
Para tener acceso a un modulo se lo debe importar a nuestro archivo y 
exportarlo desde el otro modulo
 */

//Como Exportar un modulo: module.exports es un Objeto
//Se le agrega la propiedad con el nombre "saludar" module.exports.saludar
//y luego se le asocia la definicion de la funcion " = saludar"
module.exports.saludar = saludar;
console.log(module.exports) //{ saludar: [Function: saludar] }  >En la terminal: node saludo.js