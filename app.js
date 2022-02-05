const express = require('express')
const app = express()

const port = process.env.PORT || 3000

// conexion a base de datos
const mongoose = require('mongoose');

const user = 'Admin'
const password = 'wUuiD1mBqXLs7yBf'
const dbname = 'ProyectoTSURI'
const uri = `mongodb+srv://${user}:${password}@cluster0.ylh9v.mongodb.net/${dbname}?retryWrites=true&w=majority`

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

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port);
}) 