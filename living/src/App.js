import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard.js";
<<<<<<< HEAD
//import Login from "./pages/login";
=======
import Login from "./pages/login";
>>>>>>> 4cc9efebad417dac264257e515424ae5cb358fc1
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
<<<<<<< HEAD
            <Route exact path={"/"} component={Home} />
=======
            <Route exact path={"/"} component={Login} />
>>>>>>> 4cc9efebad417dac264257e515424ae5cb358fc1
            <Route exact path={"/dashboard"} component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
