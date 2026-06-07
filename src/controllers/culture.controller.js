const Culture = require('../models/culture.model');

exports.createCulture = async (req, res) => {

    try {

        const {
            parcelle_id,
            nom_culture,
            variete,
            date_semis,
            date_recolte_prevue,
            surface_cultivee
        } = req.body;

        const culture =
            await Culture.createCulture(
                parcelle_id,
                nom_culture,
                variete,
                date_semis,
                date_recolte_prevue,
                surface_cultivee
            );

        res.status(201).json(culture);

    } catch (error) {

        res.status(500).json(error);

    }
};

exports.getAllCultures = async (req, res) => {

    try {

        const cultures =
            await Culture.getAllCultures();

        res.json(cultures);

    } catch (error) {

        res.status(500).json(error);

    }
};

exports.updateCulture = async (req, res) => {

    try {

        const {
            variete,
            date_semis,
            date_recolte_prevue,
            surface_cultivee,
            stade_croissance,
            besoin_eau,
            rendement_prevu,
            etat_culture
        } = req.body;

        const culture =
            await Culture.updateCulture(
                req.params.id,
                variete,
                date_semis,
                date_recolte_prevue,
                surface_cultivee,
                stade_croissance,
                besoin_eau,
                rendement_prevu,
                etat_culture
            );

        if (!culture) {
            return res.status(404).json({
                message: 'Culture introuvable'
            });
        }

        res.json(culture);

    } catch (error) {

        res.status(500).json(error);

    }
};

exports.deleteCulture = async (req, res) => {

    try {

        const culture =
            await Culture.deleteCulture(
                req.params.id
            );

        if (!culture) {
            return res.status(404).json({
                message: 'Culture introuvable'
            });
        }

        res.json({
            message: 'Culture supprimée',
            culture
        });

    } catch (error) {

        res.status(500).json(error);

    }
};