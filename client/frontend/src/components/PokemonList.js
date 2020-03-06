import React from "react";
import axios from "axios";
import ViewModal from "./ViewModal";
import upperCase from "../utils/uppercase";

class PokemonList extends React.Component {
  state = {
    pokemons: [],
    clickedOn: null,
    pokemon_pic: null,
    show: false
  };
  async fetchPokemons() {
    const result = await axios.get(
      "https://dpduk-developer-gavin-dhaliwal.appspot.com/api/all"
    );
    this.setState({ pokemons: result.data });
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  async fetchSorted(orderType) {
    const result = await axios.get(
      `https://dpduk-developer-gavin-dhaliwal.appspot.com/api/all/order/${orderType}`
    );
    this.setState({
      pokemons: result.data
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { orderby } = this.props;
    if (orderby !== prevProps.orderby) {
      orderby.orderby[0].asc
        ? this.fetchSorted("asc")
        : this.fetchSorted("desc");
    }
  }

  onClick = (pokemon, image) => {
    this.setState({ clickedOn: pokemon, pokemon_pic: image });
  };

  renderPokemonList = () =>
    this.state.pokemons.map((pokemon, index) => (
      <div
        key={index}
        className="pokemonitem"
        onClick={() =>
          this.onClick(pokemon.pokemon_name, pokemon.pokemon_image)
        }
      >
        <h2 className="pokemonname">{upperCase(pokemon.pokemon_name)}</h2>
        <img className="pokemonimage" src={pokemon.pokemon_image} />
      </div>
    ));

  render() {
    //console.log(this.state);
    return (
      <div>
        <div className="pokemongrid">{this.renderPokemonList()}</div>
        <ViewModal
          pokemon={this.state.clickedOn}
          image={this.state.pokemon_pic}
        />
      </div>
    );
  }
}

export default PokemonList;
