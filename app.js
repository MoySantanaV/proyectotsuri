const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3000

// conexion a base de datos
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ylh9v.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
)

    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))



//motor de plantillas
app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')

app.use(express.static(__dirname + '/public '))

//rutas
app.use('/', require('./router/webRouters'))
app.use('/proyeccionesRadiologicas', require('./router/proyeccionesRadiologicas'))


app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(PORT, () => {
    console.log('servidor a su servicio en el puerto', PORT);
}) 