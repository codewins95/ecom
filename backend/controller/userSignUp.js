const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { name, email, password } = req.body;

    //  validation
    if (!name) {
      return res.status(400).json({
        message: "Please provide a name",
        error: true,
        success: false,
      });
    }
    if (!email) {
      return res.status(400).json({
        message: "Please provide an email",
        error: true,
        success: false,
      });
    }
    if (!password) {
      return res.status(400).json({
        message: "Please provide a password",
        error: true,
        success: false,
      });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    // Create a new user
    const userData = new userModel({
      ...req.body,
      role: "USER",
      password: hashPassword,
    });

    // Save the user to the database
    const savedUser = await userData.save();

    // Respond with success
    res.status(201).json({
      data: savedUser,
      success: true,
      error: false,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Duplicate Email",
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
