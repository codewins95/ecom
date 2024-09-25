const userModel = require("../models/userModel");

async function allUsers(rew, res) {
  try {
    // console.log("all users",req.userId)
    const allUsers = await userModel.find();
    res.json({
      message: "All User ",
      data: allUsers,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
module.exports = allUsers;
