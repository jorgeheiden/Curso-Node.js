const express = require('express');
const app = express()
//Importar el modulo de mysql
const mysql2 = require('mysql2')
//Importar express-myconnection
const myconn = require('express-myconnection')
//Importar las rutas
const routerNotas = require('./routes/notas')



//Crear el objeto de configuraciones de la base de datos
const dbOptions = {
    host: 'localhost',
    port:  3306,
    user: 'root',
    password: '123456',
    database: 'dbdeprueba'
}
//MIDDLEWARES

//middleware para la conexion con la db
//Parametros: mysql2, Un objeto de configuraciones y una estrategia de conexion
app.use(myconn(mysql2, dbOptions, 'single'))
//Middleware para que el servidor pueda usar el formato JSON
app.use(express.json())


//Rutas: asociar el router a un path(se vincula el servidor a las rutas)
app.use('/api/notas', routerNotas)



//Configuraciones

//Establecer el puerto como una propiedad de la aplicacion
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), (req, res) => {
    console.log('El servidor esta escuchando en el puerto', app.get('port'))
})