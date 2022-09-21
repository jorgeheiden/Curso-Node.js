//setImmeditate()

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}

//Para ver el orden de ejeucion
console.log('Antes de setImmediate()')

setImmediate(mostrarTema, 'node.js')

//Para ver el orden de ejecucion
console.log('Despues de setImmediate()')

/*La funcion setImmediate() se ejecuta en ultimo termino
 despues de los dos console.log() Porque esta funcion se ejecuta
 luego del codigo sincrono
 */