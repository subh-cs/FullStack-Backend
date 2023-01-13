const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    // required: true,
  },
  status: {
    type: String,
    default: "active",
  },
  role: {
    type: String,
    default: "user",
  },
  time: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("User", userSchema);
