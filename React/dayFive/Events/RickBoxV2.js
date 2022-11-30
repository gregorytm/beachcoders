import React, { Component } from "react";
import "./RickBox.css";

class RickBox extends Component {
  constructor(props) {
    this.dispenseWisdom = tis.dispenseWisdom.bind(this);
  }
  static defaultProps = {
    message: [
      "Wubba Lubba Dub Dub.",
      "We got some real Morty stuff going on here",
      "Let me out of here, if I die in a chage I lose a bet.",
    ],
  };
  dispenseWisdom() {
    let { messages } = this.props;
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }

  render() {
    return (
      <div className="RickBox" onMouseEnter={this.dispenseWisdom}>
        😃
      </div>
    );
  }
}

export default RickBox;
