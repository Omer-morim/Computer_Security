// backend/src/routes/log-in.js
const express = require("express");
const { comparePassword } = require("../util/bcrypt");
const {sendQuery } = require('../api/mysql');
const loginRouter = express.Router();
//const validator = require('validator');

loginRouter.post("/Login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // שליפת סיסמה מוצפנת (hash) לפי האימייל
    const result = await sendQuery("SELECT password FROM loginvulnerable WHERE email = ?", [email]);

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const storedPasswordHash = result[0].password;
    const passwordMatch = await comparePassword(storedPasswordHash, password); // שימוש בפונקציה שהצגת

    if (passwordMatch) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = loginRouter;