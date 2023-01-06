import { SHOW_BASKET } from "../types";
import { HIDE_BASKET } from "../types";

const initialValue = {
  isShow: false,
};

export const showOrHideBasketReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SHOW_BASKET:
      return { ...state, isShow: true };
    case HIDE_BASKET:
      return { ...state, isShow: false };
    default:
      return state;
  }
};
