const Climat = require('../models/climat.model');

exports.createClimat = async (req, res) => {

    try {

        const {
            parcelle_id,
            date_mesure,
            temperature,
            humidite,
            pluviometrie,
            vitesse_vent
        } = req.body;

        const climat = await Climat.createClimat(
            parcelle_id,
            date_mesure,
            temperature,
            humidite,
            pluviometrie,
            vitesse_vent
        );

        res.status(201).json(climat);

    } catch (error) {

        res.status(500).json(error);

    }
};

exports.getAllClimat = async (req, res) => {

    const climat = await Climat.getAllClimat();

    res.json(climat);
};

exports.getClimatById = async (req, res) => {

    const climat =
        await Climat.getClimatById(req.params.id);

    res.json(climat);
};

exports.updateClimat = async (req, res) => {

    const {
        temperature,
        humidite,
        pluviometrie,
        vitesse_vent
    } = req.body;

    const climat =
        await Climat.updateClimat(
            req.params.id,
            temperature,
            humidite,
            pluviometrie,
            vitesse_vent
        );

    res.json(climat);
};

exports.deleteClimat = async (req, res) => {

    const climat =
        await Climat.deleteClimat(
            req.params.id
        );

    res.json({
        message: 'Donnée climatique supprimée',
        climat
    });
};