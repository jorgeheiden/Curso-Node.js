//*Como usar, acceder al archivo JSON desde JavaScript

//Opcion acceder de forma local
const curso = require('./4curso.json')

console.log(curso)
console.log(typeof curso) //Tipo object (es un objeto)
console.log(curso.titulo)
console.log(curso.temas)

//*Convertir un Objeto de JavaScript a JSON. Se usa JSON.stringify()

//1)Se crea un objeto de JavaScript
let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 21256,
    "numLikes": 21123,
    "temas": [
      "JavaScript",
      "Node.js"
    ],
    "esPublico": true
  }
  console.log(infoCurso) //Imprime el objeto
  console.log(typeof infoCurso) //object

//2)Convertir objeto JavaScript a JSON con JSON.stringify()
let infoCursoJSON = JSON.stringify(infoCurso)

console.log(infoCursoJSON)
console.log(typeof infoCursoJSON) //* string

//3)Si se intenta acceder a alguna de sus propiedades como si fuera un objeto:
console.log(infoCursoJSON.titulo) //*undefined porque ya no es un objeto es string

//*Convertir un JSON a un objeto JavaScript. se usa JSON.parse()
//Por ejemplo si recibe del servidor info en formato JSON 

let infoCursoObjeto = JSON.parse(infoCursoJSON)

console.log(infoCursoObjeto)
console.log(typeof infoCursoObjeto)
console.log(infoCursoObjeto.titulo) //Aprende Node.js. se puede acceder porque ahora es un objeto de js