//*catch() : Es un metodo de promes que solo se ejecuta si la promesa 
//*es rechazada

//*Tienda de pizzas

//El sistema de pedidos realiza operaciones asincronas, puede tomar
//unos segundos procesar el pedido. La operacion puede fallar
//por algun error en la red por ejemplo. Falla el 20% de las veces

//*1-Se crea una Funcion que simula las fallas de operaciones(pedidos)
//Retorna el estatus del pedido: Si se completo(true) o si no
//se completo el pedido(false)
const estatusPedido = () => {
    //El exito o fracaso se determina con un numero aleatorio
    //si es menor de 0.8 retorna true, si es mayor false
    return Math.random() < 0.8
    
}

//*2-Se representa un pedido de pizza como una promesa

const miPedidoDePizza = new Promise((resolve, reject) =>{
    //Se simula un proceso asincrono con setTimeout()
    setTimeout(() =>{
        if(estatusPedido()){
            resolve("Pedido exitoso!")
        } else{
            reject("Ocurrio un error. Por favor intente nuevamente.")
        }
    }, 3000)
})

//*3-Manejar que ocurre cuando la promesa se cumpla o rechaze
//*Sintaxis alternativa

miPedidoDePizza.then((mensajeDeConfirmacion) =>{
    console.log(mensajeDeConfirmacion)
})
.catch((mensajeDeError) => {
    console.log(mensajeDeError)
})