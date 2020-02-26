import React from "react";
import "../styles/modal.scss";
import "../styles/navbarV2.css";
import "../styles/grid.css";

import NavbarV2 from "./NavbarV2";
import PokemonList from "./PokemonList";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarV2 />
        <PokemonList />
      </div>
    );
  }
}

export default App;
