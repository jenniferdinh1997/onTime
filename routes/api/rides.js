const express = require("express");
const router = express.Router();
const ridesCtrl = require("../../controllers/rides");
const multer = require("multer");
const upload = multer();

router.post('/trip', upload.none(), ridesCtrl.create);
router.get('/:name', ridesCtrl.index);

module.exports = router;