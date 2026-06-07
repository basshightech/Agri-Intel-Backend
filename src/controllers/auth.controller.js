const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/utilisateur.model');

exports.register = async (req, res) => {
    try {

        const { nom, email, motDePasse, role } = req.body;

        const existingUser = await User.findByEmail(email);

        if (existingUser) {
            return res.status(400).json({
                message: 'Email déjà utilisé'
            });
        }

        const hashedPassword = await bcrypt.hash(motDePasse, 10);

        const user = await User.createUser(
            nom,
            email,
            hashedPassword,
            role
        );

        res.status(201).json({
            message: 'Utilisateur créé',
            user
        });

    } catch (error) {
        res.status(500).json(error);
    }
};

exports.login = async (req, res) => {

    try {

        const { email, motDePasse } = req.body;

        const user = await User.findByEmail(email);

        if (!user) {
            return res.status(404).json({
                message: 'Utilisateur introuvable'
            });
        }

        const match = await bcrypt.compare(
            motDePasse,
            user.mot_de_passe
        );

        if (!match) {
            return res.status(401).json({
                message: 'Mot de passe incorrect'
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '24h'
            }
        );

        res.json({
            token,
            user
        });

    } catch (error) {
        res.status(500).json(error);
    }
};