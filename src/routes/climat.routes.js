const router = require('express').Router();

const climatController =
require('../controllers/climat.controller');

const authMiddleware =
require('../middlewares/auth.middleware');

router.post(
    '/',
    authMiddleware,
    climatController.createClimat
);

router.get(
    '/',
    authMiddleware,
    climatController.getAllClimat
);

router.get(
    '/:id',
    authMiddleware,
    climatController.getClimatById
);

router.put(
    '/:id',
    authMiddleware,
    climatController.updateClimat
);

router.delete(
    '/:id',
    authMiddleware,
    climatController.deleteClimat
);

module.exports = router;