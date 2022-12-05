import React, { Componenet } from "react";

class Timer extends Componenet {
  constructor(props) {
    super(props);
    // this.state = { test: 1 }; //chage test to be something else with react dev tools
    this.state = { time: new Date() };
    console.log("in constructor");
  }
  componentDidMount() {
    console.log("in componenetDidMount");
    this.timeId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  render() {
    console.log("In render");
    // return <h1>Timer</h1>;
    return <h1>{this.state.time.getSeconds()}</h1>;
  }
}
export default Timer;
