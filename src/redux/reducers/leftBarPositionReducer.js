import { SELECT_LEFT_BAR_MENU_POSITION } from "../types";
import { menuConfig } from "../../Components/allConfigsConst";

const initialState = { activeLeftBarPosition: menuConfig[1] };

export const leftBarPositionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LEFT_BAR_MENU_POSITION:
      return { ...state, activeLeftBarPosition: action.payload };
    default:
      return state;
  }
};
