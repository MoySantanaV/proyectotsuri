// conexion a base de datos
/*const mongoose = require('mongoose');

const user = 'moysantanav'
const password = 'moises06'
const DBname = 'ProyectoTSURI'
const uri = `mongodb+srv://${user}:${password}@cluster0.ylh9v.mongodb.net/${DBname}?retryWrites=true&w=majority`

mongoose.connect(uri)

.then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))
*/

/*const http = require('http')
const server = http.createServer((req, res) => {
    res.end('respondiendo a la solicitud 3')
}) 

const port = 3000
server.listen(port, () => {
    console.log('escuchando solicitudes')
})*/

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')

app.use(express.static(__dirname + '/public '))


app.get('/', (req, res) => {
    res.render('index', {titulo: 'respuesta desde el render'})
})

app.get('/servicios', (req, res) => {
    res.render('servicios', { tituloServicios: 'titulo dinamico de servicios'})
})

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port);
})