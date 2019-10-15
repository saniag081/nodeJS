


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

        resolve(fullMenssage);
    });
    console.log(fullMenssage);
}

module.exports = {
    addMenssage,
};