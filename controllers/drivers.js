const Driver = require("../models/driver");
const Ride = require("../models/ride");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET = process.env.SECRET;
// const { v4: uuidv4 } = require("uuid");
// const S3 = require("aws-sdk/clients/s3");
// const s3 = new S3(); // initialize the construcotr
// now s3 can crud on our s3 buckets

const signup = async (req, res) => {
  // FilePath unique name to be saved to our bucket
  // const filePath = `${uuidv4()}/${req.file.originalname}`;
  // const params = {
  //   Bucket: process.env.BUCKET_NAME,
  //   Key: filePath,
  //   Body: req.file.buffer,
  // };
  // s3.upload(params, async function (err, data) {
  //   const user = new User({ ...req.body, photoUrl: data.Location });
  //   try {
  //     await user.save();
  //     const token = createJWT(user); // user is the payload so this is the object in our jwt
  //     res.json({ token });
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // });
  const { name, dob, email, phone, language, carMake, carModel, carYear, carColor, accessibility, password } =
    req.body;

  try {
    let driver = await Driver.findOne({ email });

    if (driver) {
      res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    // const avatar = gravatar.url(email, {
    //   s: "200",
    //   r: "pg",
    //   d: "mm",
    // });

    driver = new Driver({
      name,
      dob,
      email,
      phone,
      language,
      carMake,
      carModel,
      carYear,
      carColor,
      accessibility,
      // avatar,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    driver.password = await bcrypt.hash(password, salt);

    await driver.save();

    const payload = {
      driver: {
        id: driver.id,
      },
    };

    jwt.sign(payload, SECRET, { expiresIn: "24h" }, (err, token) => {
      if (err) {
        throw err;
      } else {
        res.json({ token });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

const login = async (req, res) => {
  // try {
  //   const user = await User.findOne({ email: req.body.email });
  //   if (!user) return res.status(401).json({ err: "bad credentials" });
  //   // had to update the password from req.body.pw, to req.body password
  //   user.comparePassword(req.body.password, (err, isMatch) => {
  //     if (isMatch) {
  //       const token = createJWT(user);
  //       res.json({ token });
  //     } else {
  //       return res.status(401).json({ err: "bad credentials" });
  //     }
  //   });
  // } catch (err) {
  //   return res.status(401).json(err);
  // } 
  let { email, password, role } = req.body;
  
  Driver.findOne({ email: email, role: role }).then((driver) => {
    if (!driver) {
      return res.status(404).json({ errors: [{ driver: "Not found" }] });
    } else {
      bcrypt
        .compare(password, driver.password)
        .then((isMatch) => {
          if (!isMatch) {
            return res
              .status(400)
              .json({ errors: [{ password: "Incorrect" }] });
          }
          const token = createJWT(driver);
          jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
              res.status(500).json({ errors: err });
            }
            if (decoded) {
              return res.status(200).json({
                success: true,
                token: token,
                message: driver,
              });
            }
          });
        })
        .catch((err) => {
          res.status(500).json({ errors: err });
        });
    }
  });
};

async function profile(req, res) {
  try {
    const driver = await Driver.findOne({ name: req.params.name });
    if (!driver) return res.status(404).json({ err: "User not found" });

    // const rides = await Ride.find({ user: user._id }).populate("user").exec();
    res.status(200).json({ driver: driver });
  } catch (err) {
    res.status(400).json({ err });
  }
}

function createJWT(driver) {
  return jwt.sign({ driver }, SECRET, { expiresIn: "24h" });
}

const getAvail = async (req, res) => {
  try {
    const available = await Ride.find({
      $or: [{ driver: { $exists: false } }, { driver: null }],
    }).populate("user");
    res.status(200).json({ available: available });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const acceptRide = async (req, res) => {
  try {
    const updatedRide = await Ride.findByIdAndUpdate(
      req.params.id,
      {
        driver: req.body.driver,
      },
      { upsert: true }
    );
    res.status(200).json({ updatedRide: updatedRide });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getTrips = async (req, res) => {
  try {
    const trips = await Ride.find({ driver: req.params.driverId }).populate("user").exec();
    res.status(200).json({ trips: trips });
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports = {
  signup,
  login,
  profile,
  getAvail,
  acceptRide,
  getTrips
};