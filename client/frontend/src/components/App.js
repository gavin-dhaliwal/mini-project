import React from "react";
import "../styles/modal.scss";
import "../styles/navbarV2.css";
import "../styles/grid.css";

import NavbarV2 from "./NavbarV2";
import PokemonList from "./PokemonList";

class App extends React.Component {
  state = { orderby: [{ asc: null, desc: null }] };

  onOrderBy(orderMethod) {
    orderMethod === "asc"
      ? this.setState({
          ...this.state,
          orderby: [{ asc: true }, { desc: null }]
        })
      : this.setState({
          ...this.state,
          orderby: [{ des: true }, { asc: null }]
        });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <NavbarV2 orderby={orderMethod => this.onOrderBy(orderMethod)} />
        <PokemonList orderby={this.state} />
      </div>
    );
  }
}

export default App;
