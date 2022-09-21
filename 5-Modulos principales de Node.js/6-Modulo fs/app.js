//* Modulo fs
//* Para que estos metodos se ejecuten de forma SINCRONA se agrega Sync EJ: fs.ReadFileSync() NO SE INCLUYE LA FUNCION como argumento (err) =>{} porque ahora es SINCRONA

//*Leer un Archivo
//En este ejemplo se va a LEER un archivo html (crear archivo index.html):

//importar el modulo fs ( no es necesario es una convencion )
const fs = require('fs');
//Leer el contenido del archivo se usa el metodo readFile():
//Argumentos: 1-el archivo, 2-utf-8 para que el resultado sea en texto
// 3-Funcion que se especifique(en este caso muestra el contenido del archivo)
fs.readFile('../6-Modulo fs/index.html', 'utf-8', (err, contenido) =>{
  if (err) {
    //Si se utiliza:
    // throw err
    //Se detiene la ejecucion del programa en caso de error y se muestra donde se produjo

    //Si se utiliza: console.log(err) la ejecucion del programa continua y se indica donde se produjo el error
    console.log(err)

  } else{
    console.log(contenido)
  }
})

//*Cambiar el nombre de un Archivo
//Argumentos: archivo, nuevo nombre, funcion que se llama cuando
//se completa el proceso de cambiar el nombre
// fs.rename('../../5-Modulos principales de Node.js/6-Modulo fs/index.html', 'main.html', (err) =>{
//   if(err){
//     Si hay un error se detiene la ejecucion del programa
//     throw err
//   }
//     Si NO hay error se cambia el nombre e imprime lo siguiente
//   console.log('nombre cambiado exitosamente')
// })

//*Agregar contenido al final de un archivo (appending)
// fs.appendFile('index.html', '<p>Hola</p>', (err) =>{
//   if(err){
//     throw err
//   }
//   console.log('Archivo actualizado...')
// })

//*Reemplazar todo el contenido del archivo
// fs.writeFile('index.html', 'contenido Nuevo', (err) =>{
//   if(err){
//     throw err
//   }
//   console.log('Contenido reemplazado exitosamente.')
// })

//*Eliminar un Archivo
// fs.unlink('index2.html', (err) => {
//   if(err){
//     throw err
//   }
//   console.log('Archivo eliminado.')
// })
