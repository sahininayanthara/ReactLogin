import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App_Aside"></div>
          <div className="App_Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher_Item_Active" className="PageSwitcher_Item">Sign In</NavLink>
                <NavLink exact to="/"  activeClassName="PageSwitcher_Item_Active" className="PageSwitcher_Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle_Link_Active" className="FormTitle_Link">Sign In</NavLink>
                   or <NavLink exact to="/" activeClassName="FormTitle_Link_Active" className="FormTitle_Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;