const express = require('express');
const router = express.Router();
const indexCtrl = require('../controlers/indexCtrl');

/* GET home page. */
router.get('/', indexCtrl.indexFn);

module.exports = router;
