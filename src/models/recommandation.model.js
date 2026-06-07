const pool = require('../config/db');

const createRecommandation = async (
    culture_id,
    type_recommandation,
    message,
    niveau_priorite
) => {

    const result = await pool.query(
        `INSERT INTO recommandation
        (
            culture_id,
            type_recommandation,
            message,
            niveau_priorite
        )
        VALUES ($1,$2,$3,$4)
        RETURNING *`,
        [
            culture_id,
            type_recommandation,
            message,
            niveau_priorite
        ]
    );

    return result.rows[0];
};

const getAllRecommandations = async () => {

    const result = await pool.query(
        'SELECT * FROM recommandation ORDER BY id DESC'
    );

    return result.rows;
};

module.exports = {
    createRecommandation,
    getAllRecommandations
};