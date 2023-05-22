import { CHECK_IMG_LOADING } from "../types";

const initialState = [];

export const imgLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IMG_LOADING:
      return [...state, { isImgLoaded: true }];
    default:
      return state;
  }
};
