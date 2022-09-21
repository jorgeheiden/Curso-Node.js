//setInterval()

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}

setInterval(mostrarTema, 1500, 'node.js')

//*Como detener la ejecucion? : ctrl + c

//Ejemplo con varios argumentos
function sumar(a, b){
    console.log(a + b)
}

setInterval(sumar, 1000, 6, 10)