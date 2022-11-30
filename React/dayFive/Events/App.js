import React, { Component } from "react";
import RickBox from "./RickBox";
import AnnoyingForm from "./AnnoyingForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Events!!</h1>
        <RickBox />
        <AnnoyingForm />
      </div>
    );
  }
}

export default App;
