const pool = require('../config/db');

const createCulture = async (
    parcelle_id,
    nom_culture,
    variete,
    date_semis,
    date_recolte_prevue,
    surface_cultivee
) => {

    const result = await pool.query(
        `INSERT INTO culture
        (parcelle_id, nom_culture, variete,
         date_semis, date_recolte_prevue,
         surface_cultivee)
        VALUES ($1,$2,$3,$4,$5,$6)
        RETURNING *`,
        [
            parcelle_id,
            nom_culture,
            variete,
            date_semis,
            date_recolte_prevue,
            surface_cultivee
        ]
    );

    return result.rows[0];
};

const getAllCultures = async () => {
    const result = await pool.query(
        'SELECT * FROM culture'
    );

    return result.rows;
};

const updateCulture = async (
    id,
    variete,
    date_semis,
    date_recolte_prevue,
    surface_cultivee,
    stade_croissance,
    besoin_eau,
    rendement_prevu,
    etat_culture
) => {

    const result = await pool.query(
        `UPDATE culture
        SET
            variete = $1,
            date_semis = $2,
            date_recolte_prevue = $3,
            surface_cultivee = $4,
            stade_croissance = $5,
            besoin_eau = $6,
            rendement_prevu = $7,
            etat_culture = $8
        WHERE id = $9
        RETURNING *`,
        [
            variete,
            date_semis,
            date_recolte_prevue,
            surface_cultivee,
            stade_croissance,
            besoin_eau,
            rendement_prevu,
            etat_culture,
            id
        ]
    );

    return result.rows[0];
};

const deleteCulture = async (id) => {

    const result = await pool.query(
        'DELETE FROM culture WHERE id = $1 RETURNING *',
        [id]
    );

    return result.rows[0];
};

module.exports = {
    createCulture,
    getAllCultures,
    updateCulture,
    deleteCulture
};