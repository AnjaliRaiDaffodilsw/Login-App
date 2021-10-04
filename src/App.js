import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom"

import Login from './component/Login';
import Logout from './component/Logout';
import Profile from './component/Profile';
import Signup from './component/Signup';
import './assets/styles/FormInput.scss';

class App extends Component {
  render() {
    const compNames = [Login, Profile, Logout, Signup];
    const linkName = ["Login", "Signup"];
    const linkTextName = ["/login", "/signup"];
    const pathNames = ["/login", "/profile", "/logout", "/signup"];

    return (
      <>
        <div className="link-container">
          <ul>
            <li>
              {linkTextName.map((value, index) => {
                return (
                  <Link
                    to={value}
                    key={index}
                  >
                    {linkName[index]}
                  </Link>
                )
              })}
            </li>
          </ul>
        </div>
        <Switch>
          {
            compNames.map((value, index) => {
              return (
                <Route
                  key={index}
                  path={pathNames[index]}
                  component={value}
                />
              )
            })
          }
        </Switch>
      </>
    )
  }
}

export default App;
