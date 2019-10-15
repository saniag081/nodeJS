const express = require('express');
const router = express.Router();
const response = require('./../../network/response');
const controller = require('./controller');


router.get('/', function(req,res){
    console.log(req.headers);
    res.header({
        "custon-header": "Nuestro valor personalisado"
    })
    response.success(req,res,'Lista de mensajes');
})

router.post('/', function(req,res){

    controller.addMenssage(req.body.user, req.body.menssage)
        .then((fullMenssage)=>{
            response.success(req,res,fullMenssage,201);
        })
        .catch((err)=>{
            response.error(req,res,'Informacion invalida',400,'error en el controlador');
        });
})

module.exports = router;