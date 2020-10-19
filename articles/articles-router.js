const axios = require('axios');
// const curl = require('curl');

const router = require('express').Router();

router.get('/', (req, res) => {
    axios.get('https://ghibliapi.herokuapp.com/films?limit=5')
    .then(response => {
        // console.log('res data here', response.data)
        res.status(200).json(response.data);
    })
    .catch(err => {
        res.status(500).json({ error: "Internal Server Error" });
    });
});

module.exports = router;