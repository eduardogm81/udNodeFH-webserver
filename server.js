const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('Hola Mundo');

    let salida = {
        nombre: 'Fernando',
        edad: 12332,
        url: req.url
    };
    res.send(salida);

});

app.listen(3000, (  ) => {
    console.log('Escuchando peticiones en el puerto 3000');
});