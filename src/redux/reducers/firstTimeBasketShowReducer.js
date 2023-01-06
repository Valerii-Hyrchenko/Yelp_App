import { FIRST_TIME_BASKET_SHOW } from "../types";
import { FIRST_TIME_BASKET_HIDE } from "../types";

const initialValue = {
  isFirstShow: true,
};

export const firstTimeBasketShowReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FIRST_TIME_BASKET_SHOW:
      return { ...state, isFirstShow: true };
    case FIRST_TIME_BASKET_HIDE:
      return { ...state, isFirstShow: false };
    default:
      return state;
  }
};
