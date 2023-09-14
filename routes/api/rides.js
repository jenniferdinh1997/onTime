const express = require("express");
const router = express.Router();
const ridesCtrl = require("../../controllers/rides");
const multer = require("multer");
const upload = multer();

router.post('/addTrip', ridesCtrl.create);
router.get('/getTrips/:userId', ridesCtrl.index);

module.exports = router;