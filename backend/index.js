const express = require("express");
require("express-async-errors");
const chalk = require("chalk");
const debug = require("debug")("app:startup");
const app = express();
const port = process.env.PORT || 3000;

require("./startup/cors")(app);
require("./startup/helmet")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/validation")();

const server = app.listen(port, () => {
  debug(`App listening at http://localhost:${port}`);
  console.info(chalk.blue(`App listening at http://localhost:${port}`));
});

module.exports = server;
