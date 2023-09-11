const User = require("../models/user");
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
  const { name, dob, email, phone, language, accessibility, password } =
    req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    // const avatar = gravatar.url(email, {
    //   s: "200",
    //   r: "pg",
    //   d: "mm",
    // });

    user = new User({
      name,
      dob,
      email,
      phone,
      language,
      accessibility,
      // avatar,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
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
  
  User.findOne({ email: email, role: role }).then((user) => {
    if (!user) {
      return res.status(404).json({ errors: [{ user: "Not found" }] });
    } else {
      bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            return res
              .status(400)
              .json({ errors: [{ password: "Incorrect" }] });
          }
          const token = createJWT(user);
          jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
              res.status(500).json({ errors: err });
            }
            if (decoded) {
              return res.status(200).json({
                success: true,
                token: token,
                message: user,
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
    const user = await User.findOne({ name: req.params.name });
    if (!user) return res.status(404).json({ err: "User not found" });

    const rides = await Ride.find({ user: user._id }).populate("user").exec();
    res.status(200).json({ rides: rides, user: user });
  } catch (err) {
    res.status(400).json({ err });
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}

module.exports = {
  signup,
  login,
  profile,
};