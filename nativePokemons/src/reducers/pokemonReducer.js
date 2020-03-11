import {
  FETCH_POKEMONS,
  FETCH_FAILED,
  FETCH_POKEMON_DETAILS,
} from '../actions/index';

export default (
  state = {pokemons: [], failedRequest: false, pokemonDetails: null},
  action,
) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        failedRequest: false,
      };
    case FETCH_POKEMON_DETAILS:
      return {
        ...state,
        pokemonDetails: action.payload,
        failedRequest: false,
      };
    default:
      return state;
  }
};
