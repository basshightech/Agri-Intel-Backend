const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        message: "Backend agricole opérationnel"
    });
});

module.exports = router;