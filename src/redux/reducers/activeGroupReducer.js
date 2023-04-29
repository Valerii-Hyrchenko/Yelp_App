import { SELECT_GROUP } from "../types";
import { menuDishesConfig } from "../../Components/allConfigsConst";

const initialState = { activeDishGroup: menuDishesConfig[0] };

export const activeGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GROUP:
      return { ...state, activeDishGroup: action.payload };
    default:
      return state;
  }
};
