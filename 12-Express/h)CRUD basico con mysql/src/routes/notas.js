const express = require('express');
const routerNotas = express.Router();

//*Metodo get

routerNotas.get('/', (req, res) => {
    //Conexion con la db
    req.getConnection((err, conection) => {
        if(err) {
            return res.send(err)
        }
        //Consulta SQL query() => parametros: 1)comandos SQL para ver todos los registros, filas => 
        //Con el nombre de la TABLA a la que se quiere acceder
        //2)funcion callback
        conection.query('SELECT * FROM notas', (err, rows) => {
            if(err){
                return res.send(err)
            }
            //Responde con los datos que se obtienen en JSON
            res.json(rows)
        })
    })
})


//*Metodo Post

routerNotas.post('/', (req, res) => {
    req.getConnection( (err, conn) => {
        if(err) return res.send(err)
        //Se insertan datos en la tabla "notas". 
        //El dato a insertar va en un array [req.body]
        //Si se quieren agregar varios datos, se usa la misma cantidad de signos ? que datos
        conn.query( 'INSERT INTO notas set ?', [req.body], (err, rows) => {
            if(err){
                return res.send(err)
            }
            res.send('La nota fue agregada')
        })
    })
})

//*Metodo Delete

routerNotas.delete('/:id', (req, res) => {
    req.getConnection( (err, conn) => {
        if(err) return res.send(err)

        conn.query('DELETE FROM notas WHERE id = ?', [req.params.id], (err, rows) => {
            if(err){
                return res.send(err)
            }
            res.send('La nota fue eliminada')
        } )
    }) 
})

//*Metodo Put

routerNotas.put('/:id', (req, res) => {
    req.getConnection( (err, conn) => {
        if(err) return res.send(err)

        conn.query( 'UPDATE notas SET ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('Nota actualizada')
        })
    })
})

module.exports = routerNotas