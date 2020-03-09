import {FETCH_POKEMONS, FETCH_FAILED} from '../actions/index';

export default (state = {pokemons: [], failedRequest: false}, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        failedRequest: false,
      };
    default:
      return state;
  }
};
