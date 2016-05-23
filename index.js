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
    console.log(err)
    console.log(results)
    connection.end()
  }
)
