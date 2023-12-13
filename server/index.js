// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");

// INIT
const app = express();
const PORT = 3000;
// const DB = "mongodb+srv://arifwahyu:qweqwe@cluster0.8zrtc8s.mongodb.net/?retryWrites=true&w=majority";
const DB =
  "mongodb://arifwahyu:qweqwe@ac-qvvimhy-shard-00-00.8zrtc8s.mongodb.net:27017,ac-qvvimhy-shard-00-01.8zrtc8s.mongodb.net:27017,ac-qvvimhy-shard-00-02.8zrtc8s.mongodb.net:27017/?ssl=true&replicaSet=atlas-j3fbo4-shard-0&authSource=admin&retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);

// CONNECTIONS
mongoose
  .connect(DB)
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
