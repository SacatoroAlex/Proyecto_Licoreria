const express = require('express');
const rutas = express.Router();

const customerController = require('./controller')

 rutas.get('/contactos.html',customerController.list)
 rutas.post('/agregar',customerController.save)


//-------------------------------------------------------------------

module.exports=rutas;