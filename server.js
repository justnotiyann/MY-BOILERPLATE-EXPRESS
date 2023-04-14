require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { SERVER_PORT, MONGODB_URL } = require("./app/config");
const port = SERVER_PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect To MongoDB
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true })
  .then(console.log("connected to database"))
  .catch((e) => console.log(e));

// Welcome Routes
app.use("/", (req, res) => {
  res
    .status(200)
    .json({ code: 200, data: ["Welcome to My Express Boilerplate"] });
});

// Other Routes goes here
const apiUsers = require("./app/api/users/users.routes");
const errorHandlerMiddleware = require("./app/middleware/handle-error.middleware");
const { notFoundMiddleware } = require("./app/middleware/not-found.middleware");
app.use("/api/users", apiUsers);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);
app.listen(port, () => console.log(`Server up and running at port ${port}`));
