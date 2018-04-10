const express = require('express');
const app = express();

// Definimos el contenido público
app.use(express.static( __dirname + '/public' ));

// Express HBS Engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', { nombre: 'Fernando', anio: new Date().getFullYear()});

});

app.listen(3000, (  ) => {
    console.log('Escuchando peticiones en el puerto 3000');
});