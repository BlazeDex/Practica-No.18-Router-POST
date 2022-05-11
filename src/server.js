let express = require('express'); //Importando la dependencia.
let app = express();              //Declaramos la app de Express.
let personsRoute= require('./routes/person'); //Imoortamos la ruta de person.js

app.set('view engine', 'ejs'); //Template de EJS.
app.use(personsRoute);         //Ejecutando la ruta de person.js
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000; //Asignamos el puerto que esuchará las peticiones.

app.listen(PORT, () => {
    console.log('Escuchando en el puerto 3000'); //Respuesta del servidor.
});