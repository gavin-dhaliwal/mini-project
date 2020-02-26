import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";

class ViewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false, pokemon: [] };
  }

  async fetchDetails(pokemonName) {
    const result = await axios.get(
      `http://localhost:3000/api/firestore/one/${pokemonName}`
    );
    this.setState({ pokemon: result.data });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.pokemon !== prevProps.pokemon) {
      this.fetchDetails(this.props.pokemon);
      this.setState({ showModal: true });
    } else if (
      this.state.showModal === false &&
      this.state.pokemon.length !== 0 &&
      prevState.showModal === false
    ) {
      this.setState({ showModal: true });
    }
  }

  pTypes() {
    if (this.state.pokemon.length !== 0)
      return this.state.pokemon.types
        .map(
          type =>
            type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
        )
        .join(" ");
  }

  pAbilities() {
    if (this.state.pokemon.length !== 0) {
      return this.state.pokemon.abilities.map(abil => {
        const ability =
          abil.ability.name.charAt(0).toUpperCase() +
          abil.ability.name.slice(1);
        return [" ", ...ability];
      });
    }
  }

  renderModal() {
    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          toggle={() =>
            this.setState(state => ({
              showModal: !state.showModal
            }))
          }
          keyboard={true}
        >
          <ModalHeader>
            <img src={this.props.image} />
            {this.props.pokemon.toUpperCase()}
          </ModalHeader>
          <ModalBody>
            <h6>
              Level: {this.state.pokemon.base_experience} <br />
              <br />
              Types: {this.pTypes()} <br />
              <br />
              Height: {this.state.pokemon.height} <br />
              <br />
              Weight: {this.state.pokemon.weight} <br />
              <br />
              Abilities: {this.pAbilities()}
            </h6>
          </ModalBody>
          <ModalFooter>
            <button onClick={() => this.setState({ showModal: false })}>
              Exit
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  render() {
    if (this.state.showModal === true) {
      return <>{this.renderModal()}</>;
    }
    return <div></div>;
  }
}

export default ViewModal;
