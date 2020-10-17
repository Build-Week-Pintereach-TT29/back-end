const db = require('../database/db-config');

module.exports = {
    getBoards,
    addBoard,
    updateBoard,
    removeBoard,
};

function getBoards() {
    return db('boards')
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