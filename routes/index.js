var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'flix - Entrar' });
});

router.post('/login', function(req, res, next){
  // captura os dados do forms
  const email = req.body.email
  const senha = req.body.senha

  //verifica no bd

  

})
module.exports = router;
