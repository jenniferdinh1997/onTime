const express = require("express");
const router = express.Router();
const driversCtrl = require("../../controllers/drivers");
const multer = require("multer");
const upload = multer();
/*---------- Public Routes ----------*/
router.post("/signup/driver", upload.single("photo"), driversCtrl.signup);
router.post("/login/driver", driversCtrl.login);
router.get("/available", driversCtrl.getAvail);
router.get(":name", driversCtrl.profile);
router.put("/accept/:id", driversCtrl.acceptRide);
router.get("/trips/:driverId", driversCtrl.getTrips);

/*---------- Protected Routes ----------*/

module.exports = router;
