const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  status: {
    type: String,
  },
  role: {
    type: String,
  },
  mobile: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
