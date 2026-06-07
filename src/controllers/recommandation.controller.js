const Recommandation =
require('../models/recommandation.model');

exports.createRecommandation =
async (req, res) => {

    try {

        const {
            culture_id,
            type_recommandation,
            message,
            niveau_priorite
        } = req.body;

        const recommandation =
            await Recommandation.createRecommandation(
                culture_id,
                type_recommandation,
                message,
                niveau_priorite
            );

        res.status(201).json(recommandation);

    } catch (error) {

        res.status(500).json(error);

    }
};

exports.getAllRecommandations =
async (req, res) => {

    const recommandations =
        await Recommandation.getAllRecommandations();

    res.json(recommandations);
};