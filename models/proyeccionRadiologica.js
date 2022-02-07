const mongoose = require('mongoose')
const  Schema  = mongoose.Schema;
  
const proyeccionRadiologicaSchema = new Schema({
    proyeccion: String,
    estructuraAnatomica: String,
    factoresDeExposicion: String,
    tamañoDeLaPlaca: String,
    posicion: String,
    rayoCentral: String,
    instruccionesAlPaciente: String,
})

//crear modelo
const proyeccionRadiologica = mongoose.model('proyeccionRadiologica', proyeccionRadiologicaSchema)

module.exports = proyeccionRadiologica