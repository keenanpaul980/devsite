const express = require('express');
const router = express.Router();

//@route        GET api/posts/test
//@description  Tests posts route
//@access       Public
router.get('/test', function(req, res) {
    res.json({
        msg: "Posts workss"
    });
});

module.exports = router;