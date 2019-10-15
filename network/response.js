exports.success = function (req,res,menssage,status){
    res.status(status || 200).send({
        error: '',
        body: menssage
    });
}

exports.error = function (req, res, menssage,status,details){
    console.error('[response error]' + details);

    res.status(status || 500).send({
        error: menssage,
        body: ''
    });
}