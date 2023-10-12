console.log("Hello, World");

const express = require("express");
const app = express();
const PORT = 3000;

// API
// http://<youripaddress>/hello world
app.get("/hello-world", (req, res) => {
  res.json({
    name: "Arif wahyu",
    age: 22,
    address: "Surakarta",
  });
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
