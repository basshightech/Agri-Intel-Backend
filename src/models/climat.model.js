const pool = require('../config/db');

const createClimat = async (
    parcelle_id,
    date_mesure,
    temperature,
    humidite,
    pluviometrie,
    vitesse_vent
) => {

    const result = await pool.query(
        `INSERT INTO donnees_climatiques
        (
            parcelle_id,
            date_mesure,
            temperature,
            humidite,
            pluviometrie,
            vitesse_vent
        )
        VALUES ($1,$2,$3,$4,$5,$6)
        RETURNING *`,
        [
            parcelle_id,
            date_mesure,
            temperature,
            humidite,
            pluviometrie,
            vitesse_vent
        ]
    );

    return result.rows[0];
};

const getAllClimat = async () => {

    const result = await pool.query(
        'SELECT * FROM donnees_climatiques ORDER BY id DESC'
    );

    return result.rows;
};

const getClimatById = async (id) => {

    const result = await pool.query(
        'SELECT * FROM donnees_climatiques WHERE id = $1',
        [id]
    );

    return result.rows[0];
};

const updateClimat = async (
    id,
    temperature,
    humidite,
    pluviometrie,
    vitesse_vent
) => {

    const result = await pool.query(
        `UPDATE donnees_climatiques
        SET
            temperature = $1,
            humidite = $2,
            pluviometrie = $3,
            vitesse_vent = $4
        WHERE id = $5
        RETURNING *`,
        [
            temperature,
            humidite,
            pluviometrie,
            vitesse_vent,
            id
        ]
    );

    return result.rows[0];
};

const deleteClimat = async (id) => {

    const result = await pool.query(
        'DELETE FROM donnees_climatiques WHERE id = $1 RETURNING *',
        [id]
    );

    return result.rows[0];
};

module.exports = {
    createClimat,
    getAllClimat,
    getClimatById,
    updateClimat,
    deleteClimat
};