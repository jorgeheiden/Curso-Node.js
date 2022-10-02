//*

//*Ejemplo donde se encadenan varia promesas

//funcion que simula el proceso de pedir un producto
//esta operacion seria asincrona y retorna una promesa
function ordenarProducto(producto){
  return new Promise((resolve, reject) =>{
    console.log(`Ordenando: ${producto} de freeCodeCamp.`)
    setTimeout( () =>{
      if(producto === 'taza'){
        resolve('Ordenando una taza con el logo de freeCodeCamp...')
      } else{
        reject('Este producto no esta disponible actualmente.')
      }
    }, 2000)
  })
}

//*

function procesarPedido(respuesta){
  return new Promise( resolve =>{
    console.log('Procesando respuesta...')
    console.log(`La respuesta fue: "${respuesta}"`)
    setTimeout( () =>{
      resolve('Gracias por tu compra. disfruta tu producto de freeCodeCamp.')
    }, 4000)
  })
}

//* Como garantizar que los dos procesos asincronos de las funciones
//* anteriores se van a realizar en un ORDEN ESPECIFICO. Se realiza con:

  //* async await
  
//*PERMITE ESCRIBIR CODIGO ASINCRONO COMO SI FUERA SINCRONO
//*se ejecuta linea por linea en orden


//Al colocar await en los procesos asincronos se le dice al codigo
//que espere a que se complete para luego continuar

async function realizarPedido(producto){ //Se define una funcion asincrona con async
  try{
    const respuesta = await ordenarProducto(producto)
    console.log('Respuesta recibida')
    console.log(respuesta)
    const respuestaProcesada = await procesarPedido(respuesta)
    console.log(respuestaProcesada)
  } catch (error) {
    console.log(error)
  }
}

realizarPedido('taza')  //Aqui se retorna una promesa y se podria utilizar then()




