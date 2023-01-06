import { SELECTED_DISHES_IN_BASKET } from "../types";
import { CHANGE_QUANTITY_DISHES } from "../types";
import { CLEAR_BASKET } from "../types";

const initialState = {
  selectedDishes: [],
};

export const basketProcessingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_DISHES_IN_BASKET:
      const { selectedDishes } = state;
      const { payload } = action;

      const getActualDishArray = () => {
        if (selectedDishes.length === 0) return [payload];
        if (selectedDishes.every((item) => item.id !== payload.id)) {
          return [...selectedDishes, payload];
        } else {
          return selectedDishes.filter((item) => item.id !== payload.id);
        }
      };
      return { ...state, selectedDishes: getActualDishArray() };

    case CHANGE_QUANTITY_DISHES:
      return {
        ...state,
        selectedDishes: state.selectedDishes.map((dish) => {
          if (dish.id === action.payload.id) {
            dish.quantity = action.payload.value;
            return dish;
          } else {
            return dish;
          }
        }),
      };
    case CLEAR_BASKET:
      return { ...state, selectedDishes: [] };
    default:
      return state;
  }
};
