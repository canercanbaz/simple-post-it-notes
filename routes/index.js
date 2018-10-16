var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.json({ name: 'Caner', surname: 'Canbaz', age: 24 });
});

module.exports = router;
