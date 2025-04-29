














var express = require('express');
var router = express.Router();

/* GET home page (login) */
router.get('/', function(req, res, next) {
  if (global.usuarioEmail && global.usuarioEmail != "") {
    res.redirect('/browse');
  }

  res.render('admin', { titulo: 'Administrador - Login' });
});

router.post('/login', async function(req, res, next){
  const email = req.body.email;
  const senha = req.body.senha;

  const usuario = await global.banco.buscarUsuario({email,senha});

  global.usuarioCodigo = usuario.cod;
  global.usuarioEmail = usuario.email;
  res.redirect('dashboard');
})

router.get('/dashboard', async function(req, res, next) {
  if (!global.usuarioEmail || global.usuarioEmail == ""){
    res.redirect('/admin/');
  }

  res.render('dashboard', { titulo: 'Administrador - Dashboard' });
});

function verificarLogin(res)
{
  if (!global.usuarioEmail || global.usuarioEmail == "")
    res.redirect('/');
}

module.exports = router;
