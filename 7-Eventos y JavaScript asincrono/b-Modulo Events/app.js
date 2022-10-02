//*Modulo Events

//En este ejemplo se define, crea un modulo con un nombre especifico
//y se ve como manejar y emitir el evento

//1- Importar, incluir el modulo events:
//(El nombre de la variable es: EventEmitter porque representa a 
//una CLASE, que permite crear una INSTANCIA de un emisor de eventos)

const EventEmitter = require('events')

//2-Crear un emisor de eventos:
//(Se crea una INSTANCIA de la clase EventEmitter)

const emisorProductos = new EventEmitter()

//3-Definir que va a pasar cuando ocurra el evento: (Event Handler)
//Cuando ocurra el evento con el nombre COMPRA, se define una 
//funcion para manejar el evento

emisorProductos.on('compra', (total) => {  
    console.log(`Se realizo una compra por $${total}.`)
})

//4-Emitir el evento usando el metodo emit():

emisorProductos.emit('compra', 500)
//Aqui se emite el evento y tambien el parametro de la funcion