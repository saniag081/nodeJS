const express = require('express');
const message = require('./../componets/message/network');


const routers = function(server){
    server.use('/message', message)
}

module.exports = routers;