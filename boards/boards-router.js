const router = require('express').Router();

const Boards = require('./boards-model');

// gets all boards of all users
router.get('/', (req, res) => {
    Boards.getBoards()
    .then(boards => {
        res.status(200).json({ data: boards });
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed getting all boards'});
    });
});

// gets boards of logged in user by users id
router.get('/user/:id', (req, res) => {
    Boards.findBoards(req.params.id)
    .then(boards => {
        if(boards.length) {
            res.json({ data: boards });
        } else {
            res.status(404).json({
                message: 'Could not find boards for given user'
            });
        };
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed getting users boards'
        });
    });
});

// gets the specified board by id
router.get('/:id', (req, res) => {
    Boards.findBoardById(req.params.id)
    .then(board => {
        res.status(200).json({ data: board });
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed getting specified board'
        });
    });
});

// adds a new board
router.post('/', (req, res) => {
    const newBoard = req.body;
    Boards.addBoard(newBoard)
    .then(board => {
        res.status(201).json({ data: board });
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed adding new board'
        });
    });
})

// updates the specified board
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Boards.findBoardById(id)
    .then(board => {
        if(board) {
            Boards.updateBoard(id, changes)
            .then(updatedBoard => {
                res.json({ data: updatedBoard });
            })
        } else {
            res.status(404).json({ message: 'Could not find board with given id' });
        }
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to update board' });
      });
});

// removes the specified board
router.delete('/:id', (req, res) => {
    Boards.removeBoard(req.params.id)
    .then(count => {
        res.json({ data: count });
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete board'});
    });
});


module.exports = router;