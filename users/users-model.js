const db = require('../database/db-config');

module.exports = {
    find,
    findBy,
    findById,
    add,
    updateUser,
    removeUser,
};

function find() {
    return db('usersTbl')
    .select("id", "username", "email")
    .orderBy("id")
};

function findBy(filter) {
    return db('usersTbl')
    .where(filter);
};

function findById(id) {
    return db('usersTbl')
    .where({ id })
    .first();
};

function add(user) {
    return db('usersTbl')
    .insert(user, "id")
    .then(ids => {
        const id = ids[0];

        return findById(id);
    })
    .catch(err => {
        console.log(err)
    });
};

function updateUser(id, changes) {
    return db('usersTbl')
    .where({ id })
    .update(changes)
};

function removeUser(id) {
    return db ('userTbl')
    .where({ id })
    .del();
};