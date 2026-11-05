const express = require("express")
const router = express.Router()

const usuario = require('./controllers/usuario')

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

router.get('/',rotaInicial)
router.post('/usuarios/login',usuario.login)
router.get('/usuarios',usuario.listar)
router.post('/usuarios',usuario.cadastrar)
router.put('/usuarios/:id',usuario.alterar)
router.delete('/usuarios/:id',usuario.excluir)

module.exports = router