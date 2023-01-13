const User = require("../model");

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.status(200).json({
      status: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.query.id);
    res.status(200).json({
      status: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.query.id, {
      name: req.body.name,
      email: req.body.email,
    });
    res.status(200).json({
      status: "User updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const dummyResponse = (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
};

module.exports = {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
  dummyResponse,
};
