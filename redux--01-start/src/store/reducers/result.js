import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter((result) => result.id !== action.resultElId);
  return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  // TODO update this switch case with the utility function
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result * 20 })
      }
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
    return state
  }
};

export default reducer;