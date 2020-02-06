const router = require('express').Router();
const serieController = require('../controllers/series');

router.get('/', serieController.listar)

router.post('/', serieController.inserir)

router.get('/:id', serieController.buscaPorId)

router.put('/:id', serieController.atualizar)

router.delete('/:id', serieController.delete)

module.exports = router;