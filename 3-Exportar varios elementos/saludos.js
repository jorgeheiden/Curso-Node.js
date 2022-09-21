/*********Exportar varios elementos**************/

//1- Se crean varias funciones

function saludar(nombre) {
    return `Hola ${nombre}`
}

function saludarHolaMundo(){
    return 'Hola Mundo'
}
//2-Se exportan dos elementos (Hay dos sintaxis posibles):

//module.exports.saludar = saludar;
//module.exports.saludarHolaMundo = saludarHolaMundo

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
}