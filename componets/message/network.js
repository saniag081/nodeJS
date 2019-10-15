const express = require('express');
const router = express.Router();
const response = require('./../../network/response');


router.get('/', function(req,res){
    console.log(req.headers);
    res.header({
        "custon-header": "Nuestro valor personalisado"
    })
    response.success(req,res,'Lista de mensajes');
})

router.post('/', function(req,res){
    console.log(req.query);
    console.log(req.body);
    //estaodos           tipos de respuestas Vacía, plana, con datos y estructurada
    // res.status(201).send({
    //     error: '',
    //     body: 'creado correctamente'
    // });
    if(req.query.error == 'ok'){
        response.error(req,res,'Error inesperado',500,'Es solo una simulacion de los errores');
    }else{
        response.success(req,res,'Creado correctamente',201);
    }

})

module.exports = router;