const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true ,trim:true},
    password: { type: String, required: [true,'Password is required'] },
    profilePic : String,
    role: { type: String,enum:['USER','ADMIN'], default: 'USER' }
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
