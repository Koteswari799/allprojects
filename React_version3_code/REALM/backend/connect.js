 const express = require('express') 

const  mysql2 = require('mysql2') 




exports.connection = mysql2.createConnection({
    host: "localhost",
    user:"root",
    password:"Koti@123",
    database: "version3"
})
