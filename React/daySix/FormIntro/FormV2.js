import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ username: evt.target.value });
  }
  handleEmailChange(evt) {
    this.setState({ Email: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(`you typed: ${this.state.username}`);
    this.setState({ username: "" });
  }
  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <form onsubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="email"
            placeholder="your email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            type="password"
            placeholder="your password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
