const express = require('express');
const router = express.Router();
const { getAllCuentas, getById, getByQuery, getByBalance, getAllAccount } = require('../controllador/accountController');

router.get('/account', getAllAccount);
router.get('/account/:id',getById);
router.get('/query',getByQuery);
router.get('/accountBalance', getByBalance);

module.exports = router;