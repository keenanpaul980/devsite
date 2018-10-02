const express = require('express');
const router = express.Router();

//@route        GET api/profile/test
//@description  Tests profile route
//@access       Public
router.get('/test', function(req, res) {
    res.json({
        msg: "Profile workss"
    });
});

module.exports = router;