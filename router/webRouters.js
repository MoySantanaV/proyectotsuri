const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index', {titulo: 'Proyecto en construccion disculpe las molestias'})
})

router.get('/servicios', (req, res) => {
    res.render('servicios', { tituloServicios: 'titulo dinamico de servicios'})
})

module.exports = router