const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const { createUser, loginUser } = require("./controllers/users");

const app = express();
const { PORT = 3001 } = process.env;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to MongoDB successfully.");
  })
  .catch(console.error);

app.use(cors());

app.post("/signin", loginUser);
app.post("/signup", createUser);

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
