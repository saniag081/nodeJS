const express = require('express');
const router = express.Router();
const response = require('./../../network/response');
const controller = require('./controller');


router.get('/', function(req,res){
    controller.getMenssage()
        .then((list)=>{
            response.success(req,res,list,200);
        })
        .catch((err)=>{
            response.error(req,res,'Unexpected Error',500,err);
        })
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