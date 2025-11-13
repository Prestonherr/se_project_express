const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes");
const { createUser, loginUser } = require("./controllers/users");
const {
  validateCreateUserBody,
  validateLoginBody,
} = require("./middlewares/validation");
const errorHandler = require("./middlewares/error-handler");
const { errors } = require("celebrate");
const { requestLogger, errorLogger } = require("./middlewares/logger");

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

app.use(requestLogger);

app.post("/signin", validateLoginBody, loginUser);
app.post("/signup", validateCreateUserBody, createUser);

app.use(routes);

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
