const express = require("express");
const router = express.Router();
const ridesCtrl = require("../../controllers/rides");

router.post('/add', ridesCtrl.create);

module.exports = router;