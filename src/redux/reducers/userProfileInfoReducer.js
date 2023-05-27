import { GET_PROFILE_INFO } from "../types";
import { CLEAR_PROFILE_INFO } from "../types";

const initialState = {
  userProfileInfo: null,
};

export const userProfileInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_INFO:
      return { ...state, userProfileInfo: action.payload };
    case CLEAR_PROFILE_INFO:
      return { ...state, userProfileInfo: null };
    default:
      return state;
  }
};
