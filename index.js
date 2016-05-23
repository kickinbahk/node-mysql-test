'use strict'

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node',
  port: '3306'
})

connection.query(
  'SELECT id, content FROM test',
  function (err, results, fields) {
    if (err) {
      console.log('A database error occured!')
    } else {
      console.log(results)
    }
    connection.end()
  }
)
