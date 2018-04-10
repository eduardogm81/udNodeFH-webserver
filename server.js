const express = require('express');
const hbs = require('hbs');
const app = express();

// Definimos el contenido público
app.use(express.static( __dirname + '/public' ));

// Express HBS Engine
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', { nombre: 'Fernando', anio: new Date().getFullYear()});

});

app.get('/about', (req, res) => {

    res.render('about', {anio: new Date().getFullYear()});

});

app.listen(3000, (  ) => {
    console.log('Escuchando peticiones en el puerto 3000');
});