import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";
import upperCase from "../utils/uppercase";
import "../styles/modal.css";
import { connect } from "react-redux";

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

  pokeTYAB(element) {
    return this.state.pokemon.length !== 0
      ? element.map(e => upperCase(e)).join(" | ")
      : "Unknown";
  }

  async handelDelete(pokemonName) {
    try {
      await axios.get(
        `https://dpduk-developer-gavin-dhaliwal.appspot.com/api/delete/one/${pokemonName}`
      );
      window.location.reload(false);
    } catch (e) {
      return console.log(e);
    }
  }

  renderModal() {
    const { isAuthenticated } = this.props;
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
          {this.props.pokemon !== null
            ? this.props.pokemon.toUpperCase()
            : null}
        </ModalHeader>
        <ModalBody>
          <dl className="docList">
            <dt className="docTitle">Level:</dt>
            <dd className="docDes">{this.state.pokemon.level}</dd>
            <dt className="docTitle">Types:</dt>
            <dd className="docDes">
              {this.pokeTYAB(this.state.pokemon.types)}
            </dd>
            <dt className="docTitle">Height:</dt>
            <dd className="docDes">{this.state.pokemon.height}</dd>
            <dt className="docTitle">Weight:</dt>
            <dd className="docDes">{this.state.pokemon.weight}</dd>
            <dt className="docTitle">Abilities:</dt>
            <dd className="docDes">
              {this.pokeTYAB(this.state.pokemon.abilities)}
            </dd>
          </dl>
        </ModalBody>
        <ModalFooter>
          {isAuthenticated ? (
            <button onClick={() => this.handelDelete(this.props.pokemon)}>
              Delete
            </button>
          ) : null}
          <button
            onClick={() => {
              this.setState({ showModal: false });
            }}
          >
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(ViewModal);
