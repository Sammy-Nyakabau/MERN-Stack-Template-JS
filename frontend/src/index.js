import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import logger from "./services/logService";

import "./index.css";

logger.init()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
