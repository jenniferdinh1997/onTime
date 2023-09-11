const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  dob: { 
    type: Date ,
    required: true
  },
  email: { 
    type: String, 
    required: true, 
    lowercase: true, 
    unique: true 
  },
  phone: { 
    type: Number 
  },
  language: { 
    type: String,
    default: "English",
    enum: ["English", "Spanish", "Mandarin", "French", "Vietnamese", "Other"]
  },
  accessibility: { 
    type: Boolean 
  },
  password: { 
    type: String,
    required: true
  },
  // photoUrl: { 
  //   type: String 
  // },
  date: {
    type: Date,
    default: Date.now()
  },
  role: {
    type: String,
    default: "rider"
  }
});

module.exports = mongoose.model("User", userSchema);
