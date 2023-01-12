const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    // enum: ["active", "inactive"],
    default: "active",
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
