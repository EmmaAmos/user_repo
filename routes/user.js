const express = require('express');
const router = express.Router();

const vhsController = require('../controllers/vhs');

router.get('/', vhsController.getAll);

router.get('/:id', vhsController.getSingle);

router.get('/:id', vhsController.getSingleUSER);

router.post('/', vhsController.createUSER);

router.put('/:id', vhsController.updateUSER);

router.delete('/:id', vhsController.deleteUSERNAME);

router.delete('/:id', vhsController.deleteUSER);

module.exports = router;