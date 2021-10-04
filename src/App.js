import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom"

import Login from './component/Login';
import Logout from './component/Logout';
import Profile from './component/Profile';
import Signup from './component/Signup';
import './assets/styles/FormInput.css';

class App extends Component {
  render() {
    return (
      <>
        <div className="link-container">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/profile" >
            <Profile />
          </Route>
          <Route path="/logout" >
            <Logout />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </>
    )
  }
}

export default App;
