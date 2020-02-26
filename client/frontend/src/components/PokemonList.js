import React from "react";
import axios from "axios";
import ViewModal from "./Modal";

class PokemonList extends React.Component {
  state = {
    pokemons: [],
    clickedOn: null,
    pokemon_pic: null
  };
  async fetchPokemons() {
    const result = await axios.get("http://localhost:3000/api/all");
    this.setState({ pokemons: result.data });
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  onClick = (pokemon, image) => {
    this.setState({ clickedOn: pokemon, pokemon_pic: image });
  };

  renderPokemonList = () => {
    return this.state.pokemons.map((pokemon, index) => {
      return (
        <div
          key={index}
          className="pokemonitem"
          onClick={() =>
            this.onClick(pokemon.pokemon_name, pokemon.pokemon_image)
          }
        >
          <h4 className="pokemonname">
            {pokemon.pokemon_name.charAt(0).toUpperCase() +
              pokemon.pokemon_name.slice(1)}
          </h4>
          <img className="pokemonimage" src={pokemon.pokemon_image} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <ViewModal
          pokemon={this.state.clickedOn}
          image={this.state.pokemon_pic}
        />
        <div className="pokemongrid">{this.renderPokemonList()}</div>
      </div>
    );
  }
}

export default PokemonList;
