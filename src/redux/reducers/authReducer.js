import { AUTH_ERROR, LOGIN_USER, REGISTER_USER, SIGN_OUT_USER } from "../types";

const getUserFromLocalStorage = () => {
  if (localStorage.getItem("authUser"))
    return JSON.parse(localStorage.getItem("authUser"));
  return null;
};

const initialState = {
  currentAuthUser: getUserFromLocalStorage(),
  currentRegisterUser: null,
  authError: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, currentAuthUser: action.payload };
    case REGISTER_USER:
      return { ...state, currentRegisterUser: action.payload };
    case SIGN_OUT_USER:
      return { ...state, currentAuthUser: action.payload };
    case AUTH_ERROR:
      return { ...state, authError: action.payload };
    default:
      return state;
  }
};
