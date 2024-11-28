const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const { validateSignUpData } = require("./utils/validation");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("../src/middlewares/auth");
app.use(cookieParser());
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    // Validation of data
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;
    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    // creating a new instance of the User model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    console.log("user", user);

    await user.save();
    res.send("User added sucessfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    // Find user by email
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      // User not found
      return res.status(404).send("Invalid Credentials");
    }
    // Compare provided password with the hashed password
    const isPasswordValid = await user.validatePassword(password);
    if (isPasswordValid) {
      // Create a JWT Token
      const token = await user.getJWT();
      // console.log(token);
      // Add the token to cookie and send response back to the user
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send("Login Successful");
    } else {
      // Invalid password
      return res.status(401).send("Invalid Credentials");
    }
  } catch (err) {
    // Log the error and send a response
    console.error("Error during login:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
});

app.post("/sendConnectionRequest", async (req, res) => {});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("Server is sucessfully listening on port 7777......");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
