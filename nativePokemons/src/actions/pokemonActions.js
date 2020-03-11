import axios from 'axios';

export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_POKEMON_DETAILS = 'FETCH_POKEMON_DETAILS';

const requestPokemons = pokemons => {
  return {
    type: FETCH_POKEMONS,
    payload: pokemons,
  };
};

const requestPokemonDetails = pokemonDetails => {
  return {
    type: FETCH_POKEMON_DETAILS,
    payload: pokemonDetails,
  };
};

const requestFailed = e => {
  return {
    type: FETCH_FAILED,
    payload: e,
  };
};

export const fetchPokemons = () => async dispatch => {
  try {
    const result = await axios.get(
      'https://dpduk-developer-gavin-dhaliwal.appspot.com/api/all',
    );

    dispatch(requestPokemons(result.data));
  } catch (e) {
    dispatch(requestFailed(e));
  }
};

export const fetchPokemonDetails = pokemonName => async dispatch => {
  try {
    const result = await axios.get(
      `https://dpduk-developer-gavin-dhaliwal.appspot.com/api/firestore/one/${pokemonName}`,
    );

    dispatch(requestPokemonDetails(result.data));
  } catch (e) {
    dispatch(requestFailed(e));
  }
};
