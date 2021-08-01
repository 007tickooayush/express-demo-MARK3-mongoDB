const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('Default Page Route')
});
module.exports = router;