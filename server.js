const express = require('express');
const router = express.Router();

var app = express();

//añadir router
app.use(router);

router.get('/message', function(req,res){
    res.send('Lista de mensajes');
})

router.post('/message', function(req,res){
    res.send('Mensaje añadido');
})

// app.use('/',(req,res)=>{
//     res.send('Hola');
// });


//puerto
app.listen(3000);
console.log('la aplicacion esta sonando en http://localhost:3000');