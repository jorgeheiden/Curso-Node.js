//Se tiene accesso al modulo solo escribiendo process
//console.log(process)

//Valor de la propiedad env, describe el ambiente de ejecucion
//del programa
//console.log(process.env)

//Acceder a los argumentos que se pasan en la terminal:
//Por ejemplo en la terminal escribir: node app.js 6 7
//Aqui se pasan dos argumentos 6 y 7
/*Esto genera un arreglo:
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Jorge\\Desktop\\Curso De Node\\Curso Node.js\\5-Modulos principales de Node.js\\3-Modulo process\\app.js',
  '6',
  '7'
]
*/
//Como acceder a esos argumentos?: Con notacion para acceder a un array: process.argv[2]
//console.log(process.argv[2])

//Acceder a todos los argumentos con un ciclo for:
for( let i = 2; i < process.argv.length; i++){
    console.log(process.argv[i])
}

//Saber cuanta memoria se esta usando:
//console.log(process.memoryUsage())

