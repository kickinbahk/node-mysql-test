'use strict'

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test',
  port: '3306'
})

connection.connect()

connection.query(
  'SLECT "foo" AS first_field, "bar" AS second_field',
  function (err, results, fields) {
    if (err) {
      console.log('A database error has occured')
    } else {
      console.log(results)
    }
    connection.end()
  }
)
