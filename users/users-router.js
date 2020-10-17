const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({ data: "users array here" })
})


module.exports = router;