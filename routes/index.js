const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(_, res) {
	res.json({ name: 'Caner', surname: 'Canbaz', age: 24, location: 'Ankara' });
});

module.exports = router;
