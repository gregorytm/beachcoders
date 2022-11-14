import React, { Componet } from "react";
import "./Pokecard.css";
// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Componet {
  render() {
    // let imgSrc = `${POKE_API}${this.props.id}.png`;
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        {/* notice in the console we get an error, it does not break anything but it asks for an alt for accessability */}
        <img src={imgSrc} alt={this.props.name} />
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;

//first step just make sure its rendering
// return <h1>pokecared!</h1>;
