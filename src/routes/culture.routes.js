const router = require('express').Router();

const cultureController = require('../controllers/culture.controller');

const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', authMiddleware, cultureController.createCulture);

router.get('/', authMiddleware, cultureController.getAllCultures);

router.put(
    '/:id',
    authMiddleware,
    cultureController.updateCulture
);

router.delete(
    '/:id',
    authMiddleware,
    cultureController.deleteCulture
);

module.exports = router;