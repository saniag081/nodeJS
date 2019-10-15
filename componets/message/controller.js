const store = require('./store');


function addMenssage(user, menssage){

    return new Promise( (resolve,reject)=>{
        if(!user || !menssage){
            console.error('[menssageControllers] no hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }

        const fullMenssage = {
            user: user,
            menssage: menssage,
            date: new Date(),
        };
        store.add(fullMenssage);
        resolve(fullMenssage);
    });
}

function getMenssage(){
    return new Promise((resolve,reject)=>{
        resolve(store.list());
    })
}

module.exports = {
    addMenssage,
    getMenssage
};