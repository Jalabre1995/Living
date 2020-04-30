import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard.js";
import Login from "./pages/login";
import Home from "./Components/Home";
import SignUp from "./pages/signUp";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/Home"} component={Home} />
            <Route exact path={"/dashboard"} component={Dashboard} />
            <Route exact path={"/Signup"} component={SignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
