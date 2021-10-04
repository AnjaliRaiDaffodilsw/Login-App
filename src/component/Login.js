import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

import '../assets/styles/FormInput.css';
import Form from './Form';
import { LoginAPI } from '../api/login';

class Login extends Component {
  constructor(props) {
    super(props)
    let isLoggedIn = false;

    const token = localStorage.getItem("token");
    if (token) isLoggedIn = true;

    this.state = {
      email: "",
      password: "",
      isLoggedIn,
      error: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const response = await LoginAPI(email, password);
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

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    if (this.state.isLoggedIn === true) return <Redirect to="/profile" />
    if (this.state.error) return (
      <h1 className="error-text">
        Invalid User {this.state.error}
      </h1>
    )
    return (
      <>
        <Form
          key={Math.random()}
          changeHandler={this.onChangeHandler}
          userState={this.state}
          submitHandler={this.handleSubmit}
        />
      </>
    )
  }
}

export default Login
