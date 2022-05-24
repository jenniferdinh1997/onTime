const express = require("express");
const router = express.Router();
const ridesCtrl = require("../../controllers/rides");

router.post('/details', ridesCtrl.create);
router.get('/details', ridesCtrl.index);

module.exports = router;