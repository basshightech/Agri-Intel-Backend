const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const parcelleRoutes = require('./routes/parcelle.routes');
const cultureRoutes = require('./routes/culture.routes');
const climatRoutes = require('./routes/climat.routes');
const recommandationRoutes = require('./routes/recommandation.routes');

const app = express();

app.get('/', (req, res) => {
    res.send('API fonctionne');
});
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/api/parcelles', parcelleRoutes);

app.use('/api/cultures', cultureRoutes);

app.use('/api/climat', climatRoutes);

app.use('/api/recommandations', recommandationRoutes);
module.exports = app;