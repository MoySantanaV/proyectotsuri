const express = require('express')
const router = express.Router()

const proyeccionRadiologica = require('../models/proyeccionRadiologica')

router.get('/', async (req, res) => {

    try {
            
        const arrayproyeccionesdb = await proyeccionRadiologica.find()
        console.log(arrayproyeccionesdb);
        res.render("proyeccionesRadiologicas", {
        arrayproyeccionesRadiologicas: arrayproyeccionesdb
    })

        } catch (error) {
            console.log(error);
        }




})

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async (req, res) => {
    const body = req.body
    try {

        await proyeccionRadiologica.create(body)

        res.redirect('/proyeccionesRadiologicas')
        
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req, res) => {
    
    const id = req.params.id

    try {
        
        const proyeccionRadiologicadb = await proyeccionRadiologica.findOne({_id: id})
        res.render('detalle', {
            proyeccionRadiologica: proyeccionRadiologicadb,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.render('detalle', {
        error: true,
        mensaje: 'No se encuentra el id'           
        })

    }
} )


module.exports = router