var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'mydb',
    queueLimit: 0, // unlimited queueing
    connectionLimit: 0 // unlimited connections 
});


console.log(pool);
const app = express();

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended : true}));


// Creating a GET route that returns data from the 'users' table.
app.get('/product/drink', function (req, res) {
    // Connecting to the database.
   
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query('SELECT * FROM Product WHERE `idProductCategories` = 1', function (error, results, fields) {
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;
            res.send(JSON.stringify(results));
            // Don't use the connection here, it has been returned to the pool.
        });
    });


});

app.get('/product/snack', function (req, res) {
    // Connecting to the database.
   
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query('SELECT * FROM Product WHERE `idProductCategories` = 2', function (error, results, fields) {
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;
            res.send(JSON.stringify(results));
            // Don't use the connection here, it has been returned to the pool.
        });
    });


});


app.get('/product/noodle', function (req, res) {
    // Connecting to the database.
   
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query('SELECT * FROM Product WHERE `idProductCategories` = 3', function (error, results, fields) {
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;
            res.send(JSON.stringify(results));
            // Don't use the connection here, it has been returned to the pool.
        });
    });


});

app.get('/product/lunch', function (req, res) {
    // Connecting to the database.
   
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query('SELECT * FROM Product WHERE `idProductCategories` = 4', function (error, results, fields) {
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;
            res.send(JSON.stringify(results));
            // Don't use the connection here, it has been returned to the pool.
        });
    });


});

// Starting our server.
app.listen(8080, () => {
    console.log('Go to http://localhost:8080/product so you can see the data.');
});