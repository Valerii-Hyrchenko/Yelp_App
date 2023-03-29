import { GET_DISHES_ITEMS_CONFIG } from "../types";

const initialState = { dishesItemsConfig: [] };

export const configsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DISHES_ITEMS_CONFIG:
      return { ...state, dishesItemsConfig: action.payload };
    default:
      return state;
  }
};
