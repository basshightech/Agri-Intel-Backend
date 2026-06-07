const pool = require('../config/db');

const createParcelle = async (
    producteur_id,
    nom,
    superficie,
    localisation,
    type_sol
) => {

    const query = `
        INSERT INTO parcelle
        (producteur_id, nom, superficie, localisation, type_sol)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;

    const values = [
        producteur_id,
        nom,
        superficie,
        localisation,
        type_sol
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
};

const getAllParcelles = async () => {
    const result = await pool.query(
        'SELECT * FROM parcelle'
    );

    return result.rows;
};

module.exports = {
    createParcelle,
    getAllParcelles
};

const getParcelleById = async (id) => {
    const result = await pool.query(
        'SELECT * FROM parcelle WHERE id = $1',
        [id]
    );

    return result.rows[0];
};

const updateParcelle = async (
    id,
    nom,
    superficie,
    localisation,
    type_sol
) => {

    const result = await pool.query(
        `UPDATE parcelle
         SET nom=$1,
             superficie=$2,
             localisation=$3,
             type_sol=$4
         WHERE id=$5
         RETURNING *`,
        [
            nom,
            superficie,
            localisation,
            type_sol,
            id
        ]
    );

    return result.rows[0];
};

const deleteParcelle = async (id) => {

    const result = await pool.query(
        'DELETE FROM parcelle WHERE id=$1 RETURNING *',
        [id]
    );

    return result.rows[0];
};

module.exports = {
    createParcelle,
    getAllParcelles,
    getParcelleById,
    updateParcelle,
    deleteParcelle
};