import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import '../assets/styles/FormInput.scss';
import Form from './Form';
import { SignupAPI } from '../api/signup';

class Signup extends Component {
  constructor(props) {
    super(props);
    let isLoggedIn = false;

    const token = localStorage.getItem("token");
    if (token) isLoggedIn = true;

    this.state = {
      isLoggedIn,
      error: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event,inputState) {
    event.preventDefault();
    const { email, password } = inputState;
    try {
      const response = await SignupAPI(email, password);
      const Token = response.data.token;
      localStorage.setItem("token", JSON.stringify(Token));
      this.setState({
        isLoggedIn: true
      });
    } catch (err) {
      this.setState({
        error: err.message
      });
    }

  }

  render() {
    if (this.state.isLoggedIn === true) return <Redirect to="/profile" />
    if (this.state.error) return (
      <h1 className="error-text">
        Invalid User {this.state.error}
      </h1>
    )
    return (
      <div>
        <Form
          key={Math.random()}
          isUserName={true}
          initialState={{username: "",password: "",email: "",}}
          submitHandler={this.handleSubmit}
        />
      </div>
    )
  }
}

export default Signup;
