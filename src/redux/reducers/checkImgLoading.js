import { CHECK_IMG_LOADING } from "../types";

const initialState = {
  loadedImg: [],
};

export const imgLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IMG_LOADING:
      return { ...state, loadedImg: [...state.loadedImg, action.payload] };
    default:
      return state;
  }
};
