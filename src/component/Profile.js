import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

import '../assets/styles/FormInput.scss';

class Profile extends Component {
  constructor(props) {
    super(props)
    let isLoggedIn = false;

    let data = localStorage.getItem("token");
    data = JSON.parse(data);
    if (data) isLoggedIn = true;

    this.state = {
      isLoggedIn,
    }
  }

  logout = () => {
    this.setState({
      isLoggedIn: false
    })
  }


  render() {
    if (this.state.isLoggedIn === false) return <Redirect to="/logout" />
    return (
      <>
        <div>
          <h1 className="heading-text">Welcome To Home Screen</h1>
          <button
            className="logout-button"
            onClick={this.logout}
          >
            Logout
            </button>
        </div>
      </>
    )
  }
}

export default Profile;
