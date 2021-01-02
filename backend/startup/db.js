const mongoose = require("mongoose");
require("dotenv").config();
const debug = require("debug")("app:db");
const chalk = require("chalk");
const logger = require("./logger");
const db = process.env.MONGO;

module.exports = function () {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      logger.info(`Connected to database`);
      debug("Connected to database");
      console.info(chalk.blue("Connected to database"));
    })
    .catch((err) => {
      debug(err.message[0]);
      logger.error(err.message);
      console.log(chalk.red(err.message[0]));
    });
};
