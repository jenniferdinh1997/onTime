const express = require("express");
const router = express.Router();
const driversCtrl = require("../../controllers/drivers");
const multer = require("multer");
const upload = multer();
/*---------- Public Routes ----------*/
router.post("/signup/driver", upload.single("photo"), driversCtrl.signup);
router.post("/login/driver", driversCtrl.login);
router.get('/:name', driversCtrl.profile);

/*---------- Protected Routes ----------*/

module.exports = router;
