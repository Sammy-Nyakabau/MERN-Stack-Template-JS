import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "../shared/ScrollToTop";

import "./App.css";

import * as ROUTES from "../../constants/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop>
          <Switch>
            <Route path={ROUTES.LANDING}>
              <header className="App-header">
                <h1>MERN Boilerplate</h1>
              </header>
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
