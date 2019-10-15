const express = require('express');
const bodyParser = require('body-parser');
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
    res.send('Lista de mensajes');
})

router.delete('/message', function(req,res){
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje ' + req.body.text + ' añadido');
})

// app.use('/',(req,res)=>{
//     res.send('Hola');
// });


//puerto
app.listen(3000);
console.log('la aplicacion esta sonando en http://localhost:3000');