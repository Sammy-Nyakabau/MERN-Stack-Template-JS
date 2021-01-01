const express = require("express");

const error = require("../middleware/error");

const feature = require("../feature/featureRouter");
const users = require("../user/userRouter");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/users", users);
  app.use(error);
};
