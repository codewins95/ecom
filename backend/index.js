const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/index");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api", router);

const PORT = process.env.PORT || 8080;

connectDB();
// .then(() => {
//   console.log("Database connected successfully");
//    app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// })
// .catch(err => {
//   console.error("Database connection error:", err);
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
