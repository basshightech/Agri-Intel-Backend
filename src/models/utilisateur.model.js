const pool = require('../config/db');

const createUser = async (nom, email, motDePasse, role) => {
    const query = `
        INSERT INTO utilisateur (nom, email, mot_de_passe, role)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;

    const values = [nom, email, motDePasse, role];
    const result = await pool.query(query, values);

    return result.rows[0];
};

const findByEmail = async (email) => {
    const result = await pool.query(
        'SELECT * FROM utilisateur WHERE email = $1',
        [email]
    );

    return result.rows[0];
};

module.exports = {
    createUser,
    findByEmail
};