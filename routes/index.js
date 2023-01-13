const express = require("express");
const router = express.Router();
const {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
  dummyResponse,
} = require("../controller");

router.get("/", dummyResponse);
router.get("/all-user", getAllUser);
router.post("/create-user", createUser);
router.delete("/delete-user", deleteUser);
router.patch("/update-user", updateUser);


module.exports = router;
