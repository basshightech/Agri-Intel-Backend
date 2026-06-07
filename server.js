const express = require('express');

const app = require('./src/app');

app.get('/', (req, res) => {
    res.send('API fonctionne');
});

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});