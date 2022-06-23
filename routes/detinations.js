var express = require('express');
var router = express.Router();
const destinationCtrl= require('../controllers/detinations')

router.post('/flights/:id/destinations',destinationCtrl.create)

module.exports = router;