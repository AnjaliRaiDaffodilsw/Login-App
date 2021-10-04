import React, { Component } from 'react'

class Form extends Component {
  render() {
    const {
      changeHandler,
      isUserName,
      userState,
      submitHandler
    } = this.props;
    return (
      <div>
        <form onSubmit={(e) => submitHandler(e)} className="form-area">
          {
            isUserName && <input
              type="text"
              placeholder="Enter your username"
              value={userState.username}
              onChange={(e) => changeHandler(e)}
              name="username"
              autoComplete="off"
              autoFocus
            />
          }

          <input
            type="email"
            placeholder="Enter your email"
            value={userState.email}
            onChange={(e) => changeHandler(e)}
            name="email"
            autoComplete="off"
            autoFocus={!isUserName}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={userState.password}
            onChange={(e) => changeHandler(e)}
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

export default Form
