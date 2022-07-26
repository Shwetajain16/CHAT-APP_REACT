const express = require("express");
const { registerUser, Login, searchUsers } = require("../controllers/users");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/").get(protect, searchUsers);
router.post("/login", Login);

module.exports = router;
