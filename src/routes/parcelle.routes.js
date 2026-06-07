const router = require('express').Router();

const parcelleController = require('../controllers/parcelle.controller');

const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', authMiddleware, parcelleController.createParcelle);

router.get('/', authMiddleware, parcelleController.getAllParcelles);

router.get('/:id', authMiddleware, parcelleController.getParcelleById);

router.put('/:id', authMiddleware, parcelleController.updateParcelle
);

router.delete('/:id', authMiddleware, parcelleController.deleteParcelle
);

module.exports = router;