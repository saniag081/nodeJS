//mocks
const list = [];

function addMenssage(menssage){
    list.push(menssage);
}

function getMenssage(){
    return list;
}

module.exports = {
    add: addMenssage,
    list: getMenssage
    // get
    // update
    // delete
}