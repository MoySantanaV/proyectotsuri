const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index', {titulo: 'respuesta desde el render'})
})

router.get('/servicios', (req, res) => {
    res.render('servicios', { tituloServicios: 'titulo dinamico de servicios'})
})

module.exports = router