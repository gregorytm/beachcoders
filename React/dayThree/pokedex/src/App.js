import React, { Component } from "react";
import Pokegame from "./Pokegame";
// import Pokedex from "./Pokedex";
// import Pokecard from "./Pokecard";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Pokecard id={4} name="Squirtle" type="water" exp={63} /> */}
      {/* <Pokedex /> */}
      <Pokegame />
    </div>
  );
}

// {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
export default App;
