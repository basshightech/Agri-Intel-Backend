const router = require('express').Router();

const recommandationController =
require('../controllers/recommandation.controller');

const authMiddleware =
require('../middlewares/auth.middleware');

router.post(
    '/',
    authMiddleware,
    recommandationController.createRecommandation
);

router.get(
    '/',
    authMiddleware,
    recommandationController.getAllRecommandations
);

module.exports = router;