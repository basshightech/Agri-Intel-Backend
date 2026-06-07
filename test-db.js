const pool = require('./src/config/db');

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('❌ Erreur PostgreSQL :', err);
    } else {
        console.log('✅ PostgreSQL connecté');
        console.log(res.rows[0]);
    }
    process.exit();
});