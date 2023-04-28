import { SEARCH_RESULT } from "../types";
import { CLEAR_SEARCH } from "../types";

const initialState = {
  searchResult: [],
};

export const searchProcessingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULT:
      return { ...state, searchResult: action.payload };

    case CLEAR_SEARCH:
      return { ...state, searchResult: [] };

    default:
      return state;
  }
};
