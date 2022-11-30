import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
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
            name={username}
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name={email}
            placeholder="your email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name={password}
            placeholder="your password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
