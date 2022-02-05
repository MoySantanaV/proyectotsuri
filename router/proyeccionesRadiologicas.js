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



module.exports = router