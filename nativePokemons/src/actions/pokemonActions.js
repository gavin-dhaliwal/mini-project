import axios from 'axios';

export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_FAILED = 'FETCH_FAILED';

const requestPokemons = pokemons => {
  return {
    type: FETCH_POKEMONS,
    payload: pokemons,
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
