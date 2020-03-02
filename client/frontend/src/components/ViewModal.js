import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";
import upperCase from "../utils/uppercase";
import "../styles/modal.css";

class ViewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false, pokemon: [] };
  }

  async fetchDetails(pokemonName) {
    const result = await axios.get(
      `https://dpduk-developer-gavin-dhaliwal.appspot.com/api/firestore/one/${pokemonName}`
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
    return this.state.pokemon.length !== 0
      ? this.state.pokemon.types
          .map(type => upperCase(type.type.name))
          .join(" | ")
      : "Unknown";
  }

  pAbilities() {
    return this.state.pokemon.length !== 0
      ? this.state.pokemon.abilities
          .map(abil => upperCase(abil.ability.name))
          .join(" | ")
      : "Unknown";
  }

  renderModal() {
    return (
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
          <dl className="docList">
            <dt className="docTitle">Level:</dt>
            <dd className="docDes">{this.state.pokemon.base_experience}</dd>
            <dt className="docTitle">Types:</dt>
            <dd className="docDes">{this.pTypes()}</dd>
            <dt className="docTitle">Height:</dt>
            <dd className="docDes">{this.state.pokemon.height}</dd>
            <dt className="docTitle">Weight:</dt>
            <dd className="docDes">{this.state.pokemon.weight}</dd>
            <dt className="docTitle">Abilities:</dt>
            <dd className="docDes">{this.pAbilities()}</dd>
          </dl>
        </ModalBody>
        <ModalFooter>
          <button onClick={() => this.setState({ showModal: false })}>
            Exit
          </button>
        </ModalFooter>
      </Modal>
    );
  }

  render() {
    return this.state.showModal === true ? <>{this.renderModal()}</> : <></>;
  }
}

export default ViewModal;
