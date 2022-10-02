//* PROMESAS

const promesaCumplida = false; //Aqui se simula, representa el
//resultado de un proceso asincrono

//*1-Como crear una Promesa?:

//RESOLVE Y REJECT son dos funciones que se asignan automaticamente
const miPromesa = new Promise((resolve, reject) =>{
    //Se crea una funcion para simular el retraso de un proceso 
    //asincrono con setTimeout()
    setTimeout(() =>{
        if(promesaCumplida){
            resolve('¡promesa cumplida!')
        } else{
            reject('Promesa rechazada...')
        }
    }, 3000);
})

//*2-Como manejar que ocurre cuando una promesa se cumpla o rechaze:

//Funcion que maneja el EXITO de la promesa(Se ejecuta si es exitosa)
const manejarPromesaCumplida = (valor) =>{
    console.log(valor)
}
//Funcion que maneja el FRACASO de la promesa(Se ejecuta si es rechazada)
const manejarPromezaRechazada = (razonRechazo) =>{
    console.log(razonRechazo)
}
//Se asocia las funciones que van a manejar el exito o el 
//fracaso con el metodo then()
miPromesa.then(manejarPromesaCumplida, manejarPromezaRechazada)


