const logger = require("../startup/logger");
const chalk = require("chalk");
const debug = require("debug")("app:error");

module.exports = function (err, _req, res, _next) {
  logger.error(err.message, err);
  debug(err.message);
  console.log(chalk.red(err.message));

  res.status(500).send("Something failed.");
};
