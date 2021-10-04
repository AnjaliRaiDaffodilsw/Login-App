import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

import '../assets/styles/FormInput.css';

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
      const token = await axios.post("https://reqres.in/api/login",
        { email, password });
      localStorage.setItem("token", JSON.stringify(token));
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
        <form onSubmit={this.handleSubmit} className="form-area">
          <input
            type="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.onChangeHandler}
            name="email"
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            name="password"
            autoComplete="off"
          />
          <input
            type="submit"
          />
        </form>
      </>
    )
  }
}

export default Login
