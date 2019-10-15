const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

const router = express.Router();

var app = express();
app.use(bodyParser.json());//metodo json()
app.use(bodyParser.urlencoded( {extended: false} ) );
//añadir router
app.use(router);

router.get('/message', function(req,res){
    console.log(req.headers);
    res.header({
        "custon-header": "Nuestro valor personalisado"
    })
    response.success(req,res,'Lista de mensajes');
})

router.post('/message', function(req,res){
    console.log(req.query);
    console.log(req.body);
    //estaodos           tipos de respuestas Vacía, plana, con datos y estructurada
    // res.status(201).send({
    //     error: '',
    //     body: 'creado correctamente'
    // });
    if(req.query.error == 'ok'){
        response.error(req,res,'Error simulado',400);
    }else{
        response.success(req,res,'Creado correctamente',201);
    }

})

// app.use('/',(req,res)=>{
//     res.send('Hola');
// });

//servir staticos
app.use('/app', express.static('public'));

//puerto
app.listen(3000);
console.log('la aplicacion esta sonando en http://localhost:3000');