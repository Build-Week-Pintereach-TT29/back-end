const axios = require('axios');
// const curl = require('curl');

const router = require('express').Router();

router.get('/', (req, res) => {
    const requestOptions = {
        headers: { accept: 'application/json' },
    };
    
    axios.get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
        res.status(200).json(response.data.results);
    })
    .catch(err => {
        res.status(500).json({ error: "Internal Server Error" });
    });
});

module.exports = router;