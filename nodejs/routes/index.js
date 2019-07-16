var router = require('express').Router();
// var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/aashwin', function(req, res) {
  res.render('newpage');
});

module.exports = router;
