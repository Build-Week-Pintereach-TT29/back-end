const router = require('express').Router();

router.get('/register', (req, res) => {
    res.status(200).json({ data: "register route here" })
})

router.get('/login', (req, res) => {
    res.status(200).json({ data: "login route here" })
})


module.exports = router;