const config = require('./config') //Get the database connection login from config.js
const express = require('express'); //Import Express
const app = express(); //Initialize Express
const port = config.Port ? config.Port : 3000; //Initialize the port don't forget to change the port in requests if not 3000

//MySQL connection
const mysql = require('mysql');
const username = config.DataBase.username; //Your username
const password = config.DataBase.password; //Your password

//Set user infos
const con = mysql.createConnection({
  host: "localhost",
  user: username,
  password: password
});

//Check if user exist
con.connect(function(err)
{
  if (err) throw err; //Not connected due to an error
  console.log("Connected"); //Connected to MySQL
})

//Import cors to link differents server
const cors = require('cors');

app.use(cors()); //Authorize cross-origin request
app.use(express.json()); //Read JSON in request

app.get('/', (req, res) => {
    res.send("Express.js");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`); //Server open on port 3000
});