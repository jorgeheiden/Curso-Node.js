//Importar un modulo:
//1-Se asigna el modulo a una constante
//2-Se utiliza la funcion require() para importar (cuando se trabaja
// con required se usa el termino incluir en lugar de importar)
//3-Se indica la carpeta y el modulo a importar: require("./saludo.js")
const saludo = require("./saludo.js")

//4-Acceder al valor del Objeto importado
console.log(saludo) //Imprime el objeto importado: { saludar: [Function: saludar] }
console.log(saludo.saludar("Jorge")) //Se accede a la propiedad saludar() del objeto saludo
                                     //con notacion de puntos porque es un Objeto
//5-Imprimir: node app.js