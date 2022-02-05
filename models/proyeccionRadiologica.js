const mongoose = require('mongoose')
const  Schema  = mongoose.Schema;
  
const proyeccionRadiologicaSchema = new Schema({
    nombre: String,
    descripcion: String
})

//crear modelo
const proyeccionRadiologica = mongoose.model('proyeccionRadiologica', proyeccionRadiologicaSchema)

module.exports = proyeccionRadiologica