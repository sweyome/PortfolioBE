const db = require('../dbconfig');

module.exports = {
    find,
    add,
    remove
};

function find(){
    return db('contact')
}

function add(user){
    return db('contact').insert(user)
    }

// resolve to a count
function remove(id){
return db('contact').where({ id }).del()
}