import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard.js";
import Login from "./pages/login";
import Home from "./Components/Home";
import SignUp from './pages/SignUp.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/login"} component={Login}/>
            <Route exact path ={"/sign-up"} component={SignUp}/>
            <Route exact path={"/dashboard"} component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
