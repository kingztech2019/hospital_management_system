var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	//req.session.username = null;
	res.clearCookie('username');
	res.redirect('/login');
});

module.exports = router;