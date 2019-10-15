const express = require('express');

var app = express();

app.use('/',(req,res)=>{
    res.send('Hola');
});


//puerto
app.listen(3000);
console.log('la aplicacion esta sonando en http://localhost:3000');