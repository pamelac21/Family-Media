const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('calendar');
});

module.exports = router;