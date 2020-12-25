const express = require("express");
const debug = require('debug')("app:startup");
const app = express();
const port = process.env.PORT || 3000;


require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/validation")();

const server = app.listen(port, () =>
  debug(`App listening at http://localhost:${port}`)
);

module.exports = server;