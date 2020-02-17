import React from "react";
import axios from "axios";
import "../styles/grid.css";

class PokemonList extends React.Component {
  state = {
    pokemons: [],
    clickedOn: null
  };
  async fetchPokemons() {
    const result = await axios.get("http://localhost:3000/api/all");
    this.setState({ pokemons: result.data });
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  onClick = pokemon => {
    console.log(`Clicked on item ${pokemon}`);
    this.setState({ clickedOn: pokemon });
  };

  renderPokemonList = () => {
    return this.state.pokemons.map((pokemon, index) => {
      return (
        <div
          key={index}
          className="item"
          onClick={() => this.onClick(pokemon.pokemon_name)}
        >
          <h4 className="name">
            {pokemon.pokemon_name.charAt(0).toUpperCase() +
              pokemon.pokemon_name.slice(1)}
          </h4>
          <img className="image" src={pokemon.pokemon_image} alt="" />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="pokemon-grid">{this.renderPokemonList()}</div>{" "}
      </div>
    );
  }
}

export default PokemonList;
