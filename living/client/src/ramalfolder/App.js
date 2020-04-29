import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Form">
            <div className="PageSwitcher">
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUp}>
              </Route>
              <Route path="/sign-in" component={SignIn}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
