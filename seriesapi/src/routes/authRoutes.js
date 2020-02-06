const router = require('express').Router()
const UsuarioValidator = require("../validators/usuario")
const authCtrl = require('../controllers/autenticacao')

router.post('/registrar', UsuarioValidator.validations(),
authCtrl.registrar)

router.post('/autenticar', authCtrl.autenticar)

module.exports = router;