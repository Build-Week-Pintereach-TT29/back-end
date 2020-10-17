const db = require('../database/db-config');

module.exports = {
    getBoards,
    findBoards,
    findBoardById,
    addBoard,
    updateBoard,
    removeBoard,
};

function getBoards() {
    return db('boards')
};

function findBoards(id) {
    return db('users as u')
    .join('boards as b', 'u.id', 'b.user_id')
    .select('b.name', 'b.category', 'b.description')
    .where('u.id', id)
};

function findBoardById(id){
    return db('boards')
    .where({ id })
    .first();
};

function addBoard(board) {
    return db('boards')
    .insert(board, 'id')
    .then(ids => {
        const id = ids[0];

        return db('boards').where({ id }).first();
    });
};

function updateBoard(id, changes) {
    return db('boards')
    .where({ id })
    .update(changes)
};

function removeBoard(id) {
    return db ('boards')
    .where({ id })
    .del();
};