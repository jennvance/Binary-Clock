var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Binary Circus' });
});

router.get('/digital', function(req,res){
	res.render('digital');
});

module.exports = router;
