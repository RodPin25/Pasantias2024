const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', //Su propio usuario
    password: '', //Contraseña de cada uno
    database: 'pasantias', //Nombre de la base de datos, no de las tablas
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = pool.promise() //Exporta la conexion para usarlo en otro archivo