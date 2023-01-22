const User = require("../model");
const { sendMail } = require("../utils/sendMail");

const getAllUser = async (req, res) => {
  try {
    if (req.query.id != undefined) {
      const singleUser = await User.findById(req.query.id);
      return res.status(200).json({
        singleUser,
      });
    }
    const user = await User.find()
      .limit(req.query.limit * 1)
      .skip((req.query.page - 1) * req.query.limit);
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
      status: req.body.status,
      role: req.body.role,
      mobile: req.body.mobile,
      message: req.body.message,
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
      status: req.body.status,
      role: req.body.role,
      mobile: req.body.mobile,
      message: req.body.message,
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

const sendMailToAll = async (req, res) => {
  try {
    const users = await User.find();
    for (let i = 0; i < users.length; i++) {
      const email = users[i].email;
      const message = users[i].message;
      // create mailOptions
      const mailOptions = {
        from: "Subhodip <rsubh281@gmail.com>",
        to: email,
        subject: "Welcome",
        text: message,
      };
      const result = await sendMail(mailOptions);
      console.log("Email sent to", email);
    }
    res.status(200).json({ message: "Email sent to everyone successfully" });
  } catch (error) {
    console.log("Error", error);
  }
};

const searchUser = async (req, res) => {
  const { name, email, mobile } = req.query;
  const searchKey = name || email || mobile;
  try {
    const user = await User.find({
      $or: [
        { name: { $regex: `${searchKey}`, $options: "i" } },
        { email: { $regex: `${searchKey}`, $options: "i" } },
        { mobile: { $regex: `${searchKey}`, $options: "i" } },
      ],
    });
    console.log(user);
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
  dummyResponse,
  sendMailToAll,
  searchUser,
};
