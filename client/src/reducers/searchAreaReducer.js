import { GET_AREA } from '../actions/types';

const initialState = {};

function searchAreaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AREA:
      return action.payload;
    default:
      return state;
  }
}

export default searchAreaReducer;