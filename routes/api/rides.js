const express = require("express");
const router = express.Router();
const ridesCtrl = require("../../controllers/rides");
const multer = require("multer");
const upload = multer();

router.post('/details', upload.none(), ridesCtrl.create);
router.get('/details', ridesCtrl.index);

module.exports = router;