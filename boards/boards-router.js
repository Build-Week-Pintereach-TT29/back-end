const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({ data: "boards array here" })
})


module.exports = router;