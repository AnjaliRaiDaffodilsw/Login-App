import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: this.props.initialState.email,
      password: this.props.initialState.password,
      username: this.props.initialState.username
    }
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const {
      isUserName,
      submitHandler,
    } = this.props;
    const { username, password, email } = this.state;

    return (
      <div>
        <form
          onSubmit={(e) => submitHandler(e, this.state)}
          className="form-area"
        >
          {
            isUserName && <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={this.onChangeHandler}
              name="username"
              autoComplete="off"
              autoFocus
            />
          }

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={this.onChangeHandler}
            name="email"
            autoComplete="off"
            autoFocus={!isUserName}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={this.onChangeHandler}
            name="password"
            autoComplete="off"
          />
          <input
            type="submit"
          />
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  isUserName: PropTypes.bool,
  submitHandler: PropTypes.func,
  initialState: PropTypes.object,
};

export default Form;
