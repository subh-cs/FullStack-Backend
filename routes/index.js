const express = require("express");
const router = express.Router();
const {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
  dummyResponse,
  sendMailToAll,
  searchUser,
} = require("../controller");

// const { sendMail, sendMailToAll } = require("../utils/sendMail");

router.get("/", dummyResponse);
router.get("/user", getAllUser);
router.get("/send-mail", sendMailToAll);
router.get("/search", searchUser);
router.post("/create-user", createUser);
router.delete("/delete-user", deleteUser);
router.patch("/update-user", updateUser);

module.exports = router;
