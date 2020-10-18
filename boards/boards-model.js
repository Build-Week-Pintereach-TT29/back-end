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
    return db('userBoards')
};

function findBoards(id) {
    return db('usersTbl as u')
    .join('userBoards as b', 'u.id', 'b.user_id')
    .select('b.id', 'b.name', 'b.category', 'b.description')
    .where('u.id', id)
};

function findBoardById(id){
    return db('userBoards')
    .where({ id })
    .first();
};

function addBoard(board) {
    return db('userBoards as b')
    .insert(board, 'id')
    .join('usersTable as u', 'u.id', 'b.user_id')
    // .where('b.user_id', 'id')
    .then(ids => {
        const id = ids[0];

        return db('userBoards').where({ id }).first();
    });
};

function updateBoard(id, changes) {
    return db('userBoards')
    .where({ id })
    .update(changes)
};

function removeBoard(id) {
    return db ('userBoards')
    .where({ id })
    .del();
};