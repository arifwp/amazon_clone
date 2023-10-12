// IMPORTS FROM PACKAGES
const express = require("express");

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");

// INIT
const app = express();
const PORT = 3000;

// API

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
