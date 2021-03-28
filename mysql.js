const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost', // ip address of server running mysql
  user: 'keen', // user name to your mysql database
  password: '123456', // corresponding password
  database: 'learning', // use this database to querying context
})

// connect to the database.
con.connect(function (err) {
  if (err) throw err
  console.log('Connected!')

  con.query('SELECT * FROM learning.students', function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err
    // if there is no error, you have the result
    console.log(result)

    console.log(fields)
  })
  const records = [
    ['Miley'],
    ['Jobin'],
    ['Amy'],
  ]
  con.query('INSERT INTO students (name) VALUES ?', [records], function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err
    // if there is no error, you have the result
    console.log(result)
  })
  con.query('UPDATE students SET name="Amy1" WHERE name="Amy"', function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err
    // if there is no error, you have the result
    console.log(result)
  })
  con.query('DELETE FROM students WHERE name="Amy1"', function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err
    // if there is no error, you have the result
    console.log(result)
  })
})
