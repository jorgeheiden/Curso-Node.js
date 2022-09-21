/*
En este ejemplo se importan todos lo elementos del modulo y se asignan a una variable:
const saludos = require("../4-Sintaxis de desestructuracion y require()/saludos")
*/

//Aqui se utiliza la sintaxis de desestructuracion: 
//Para no incluir todos lo elementos del modulo que importamos
//En este ejemplo solo se importa la funcion: { saludarHolaMundo }
const { saludarHolaMundo } = require('../4-Sintaxis de desestructuracion y require()/saludos')

//Como importar varios elementos?: se separan con una coma Ej: { saludarHolaMundo, saludar }
//const { saludarHolaMundo, saludar } = require('../4-Sintaxis de desestructuracion y require()/saludos')

console.log(saludarHolaMundo())