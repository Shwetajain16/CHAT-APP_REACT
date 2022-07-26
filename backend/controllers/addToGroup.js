const asyncHandler = require("express-async-handler");
const chatModel = require("../Models/chatModel");
const userModel = require("../Models/userModel");

const addToGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  const add = await chatModel
    .findByIdAndUpdate(
      chatId,
      {
        $push: { users: userId },
      },
      {
        new: true,
      }
    )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!add) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(added);
  }
});

module.exports = addToGroup;
