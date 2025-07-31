const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { PORT = 3001 } = process.env;
const usersRouter = require("./routes/users");
const routes = require("./routes");

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to MongoDB successfully.");
  })
  .catch(console.error);

app.use(express.json());
app.use("/users", usersRouter);
app.use(routes);

app.use((req, res, next) => {
  req.user = {
    _id: "688916f693fa1e1d38da47b4",
  };
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
