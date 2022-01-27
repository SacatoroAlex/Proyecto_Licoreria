const connection = require("express-myconnection");
const { redirect } = require("express/lib/response");

const controller={};

controller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM  datos',(err,rutas)=>{
            if(err){
                res.json(err);
            }
            res.render('contactos',{
                data: rutas
            });
        });
    });
};

//ingresar datos a bdd

controller.save=(req,res)=>{
   req.getConnection((err,conn)=>{
       conn.query('INSERT INTO datos set ?',[req.body],(err,cliente)=>{
       res.redirect('contactos')
       })
   })
};
module.exports= controller;