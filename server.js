const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

const app = express();

// Definimos el contenido público
app.use(express.static( __dirname + '/public' ));

// Express HBS Engine
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', { nombre: 'nombRe apeLlIdo'});

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, (  ) => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});