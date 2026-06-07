const Parcelle = require('../models/parcelle.model');

exports.createParcelle = async (req, res) => {

    try {

        const {
            producteur_id,
            nom,
            superficie,
            localisation,
            type_sol
        } = req.body;

        const parcelle =
            await Parcelle.createParcelle(
                producteur_id,
                nom,
                superficie,
                localisation,
                type_sol
            );

        res.status(201).json(parcelle);

    } catch (error) {

        res.status(500).json(error);

    }
};

exports.getAllParcelles = async (req, res) => {

    try {

        const parcelles =
            await Parcelle.getAllParcelles();

        res.json(parcelles);

    } catch (error) {

        res.status(500).json(error);

    }
};

exports.getParcelleById = async (req, res) => {

    const parcelle =
        await Parcelle.getParcelleById(req.params.id);

    if (!parcelle) {
        return res.status(404).json({
            message: 'Parcelle introuvable'
        });
    }

    res.json(parcelle);
};

exports.updateParcelle = async (req, res) => {

    const {
        nom,
        superficie,
        localisation,
        type_sol
    } = req.body;

    const parcelle =
        await Parcelle.updateParcelle(
            req.params.id,
            nom,
            superficie,
            localisation,
            type_sol
        );

    res.json(parcelle);
};

exports.deleteParcelle = async (req, res) => {

    const parcelle =
        await Parcelle.deleteParcelle(
            req.params.id
        );

    res.json({
        message: 'Parcelle supprimée',
        parcelle
    });
};