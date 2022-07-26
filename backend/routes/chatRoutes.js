const express = require("express");
const { protect } = require("../middleware/auth");
const accessChat = require("../controllers/accessChat");
const fetchChat = require("../controllers/fetchChat");
const generateGroupChat = require("../controllers/generateGroupChat");
const renameGroupName = require("../controllers/renameGroupName");
const addToGroup = require("../controllers/addToGroup");
const removeFromGroup = require("../controllers/removeFromGroup");
const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChat);
router.route("/group").post(protect, generateGroupChat);
router.route("/rename").put(protect, renameGroupName);
router.route("/removegroup").put(protect, removeFromGroup);
router.route("/groupadduser").put(protect, addToGroup);

module.exports = router;
