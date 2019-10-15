const express = require('express');
const bodyParser = require('body-parser');
// const router = require('./componets/message/network');
const router = require('./network/routers');
var app = express();


app.use(bodyParser.json());//metodo json()
app.use(bodyParser.urlencoded( {extended: false} ) );
//añadir router
// app.use(router);

router(app);

//servir staticos
app.use('/app', express.static('public'));

//puerto
app.listen(3000);
console.log('la aplicacion esta sonando en http://localhost:3000');


