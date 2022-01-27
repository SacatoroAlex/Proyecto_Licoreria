const path =require('path');
const http = require('http');
const express =require('express');
const morgan = require("morgan");
const app = express();
const mysql = require('mysql');
const myconnection = require('express-myconnection');
//-------------------------------------------
const router = require('./rutas');
app.use('/', router)

//-----------------------------------------
app.use(express.static(__dirname+'/'))

app.get('/',(req, res) => {
    res.render('index.html')
})

app.get('*',(req, res) => {
    res.sendFile(__dirname+'/notfound.html')
    
})

app.listen(4000);
console.log('Servidor corriendo en el puerto 4000')

//------------------------------------------------------------
app.use(morgan('dev'));

const dbConfig = {
    host: 'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'cliente'
    };
 app.use(myconnection(mysql, dbConfig, 'single'));

//----------------------------------
app.use(express.urlencoded({extended: false}));
app.use(express.json())


app.get('/agregar',function(req, res){
    res.render('contactos', {qs: req.query})
});