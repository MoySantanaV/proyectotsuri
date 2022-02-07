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


router.delete('/:id', async (req, res) => {
    const id = req.params.id
    
    try {
        const proyeccionRadiologicadb = await proyeccionRadiologica.findOneAndDelete({ _id: id })
        
        if (proyeccionRadiologicadb) {
            res.json({
                estado: true,
                mensaje: 'Eliminado'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'No se pudo eliminar'
            })
    }

    } catch (error) {
        console.log(error);
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const body = req.body

    try {

        const proyeccionRadiologicadb = await proyeccionRadiologica.findByIdAndUpdate(
            id, body, { useFindAndMoify: false })
        
        res.json({
            estado: true,
            mensaje: 'Editado'
        })

    } catch (error) {
        console.log(error);
            res.json({
            estado: false,
            mensaje: 'No se pudo editar'
        })
    }
})

module.exports = router