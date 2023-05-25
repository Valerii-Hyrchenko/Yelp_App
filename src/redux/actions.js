import { SELECT_GROUP } from "./types";
import { SELECT_LEFT_BAR_MENU_POSITION } from "./types";
import { GET_DISHES_ITEMS_CONFIG } from "./types";
import { REGISTER_USER } from "./types";
import { CHECK_IMG_LOADING } from "./types";
import { AUTH_ERROR } from "./types";
import { LOGIN_USER } from "./types";
import { SHOW_LOADER } from "./types";
import { HIDE_LOADER } from "./types";
import { SHOW_BASKET } from "./types";
import { FIRST_TIME_BASKET_SHOW } from "./types";
import { FIRST_TIME_BASKET_HIDE } from "./types";
import { HIDE_BASKET } from "./types";
import { CLEAR_BASKET } from "./types";
import { SELECTED_DISHES_IN_BASKET } from "./types";
import { CHANGE_QUANTITY_DISHES } from "./types";
import { SEARCH_RESULT } from "./types";
import { CLEAR_SEARCH } from "./types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { child, get } from "firebase/database";
import { dbRef } from "../base";
import { app } from "../base";

const auth = getAuth();

const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const showBasket = () => {
  return {
    type: SHOW_BASKET,
  };
};

export const hideBasket = () => {
  return {
    type: HIDE_BASKET,
  };
};

export const firstTimeShowBasket = () => {
  return {
    type: FIRST_TIME_BASKET_SHOW,
  };
};

export const firstTimeHideBasket = () => {
  return {
    type: FIRST_TIME_BASKET_HIDE,
  };
};

export const updateBasket = (basketItems) => {
  return {
    type: SELECTED_DISHES_IN_BASKET,
    payload: basketItems,
  };
};

export const changeQuantityDishes = (dataForChange) => {
  return {
    type: CHANGE_QUANTITY_DISHES,
    payload: dataForChange,
  };
};

export const clearBasket = () => {
  return {
    type: CLEAR_BASKET,
  };
};

export const selectGroup = (groupName) => {
  return {
    type: SELECT_GROUP,
    payload: groupName,
  };
};

export const selectActiveMenuPosition = (menuItem) => {
  return {
    type: SELECT_LEFT_BAR_MENU_POSITION,
    payload: menuItem,
  };
};

export const checkImgLoading = (img) => {
  return {
    type: CHECK_IMG_LOADING,
    payload: { isImgLoaded: true, img },
  };
};

export const getDishesItemsConfig = () => {
  return (dispatch) => {
    get(child(dbRef, `/dishesConfig`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let dishesItemsConfig = snapshot.val();
          dispatch({
            type: GET_DISHES_ITEMS_CONFIG,
            payload: dishesItemsConfig,
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const registerUser = ({ name, password }) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        name,
        password
      );
      const user = userCredential.user;
      if (user) {
        dispatch({
          type: REGISTER_USER,
          payload: user,
        });
      }
      dispatch(hideLoader());
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.message,
      });
      dispatch(hideLoader());
    }
  };
};

export const loginUser = ({ login, password }) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const userCredential = await signInWithEmailAndPassword(
        auth,
        login,
        password
      );
      const user = userCredential.user;
      if (user) {
        dispatch({
          type: LOGIN_USER,
          payload: user,
        });
      }
      dispatch(hideLoader());
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.message,
      });
      dispatch(hideLoader());
    }
  };
};

export const signOutUser = () => {
  return async (dispatch) => {
    dispatch(showLoader());
    await signOut(auth);
    dispatch({
      type: LOGIN_USER,
      payload: null,
    });
    localStorage.setItem("authUser", JSON.stringify(null));
    dispatch(hideLoader());
  };
};

export const clearErrorMessage = () => {
  return {
    type: AUTH_ERROR,
    payload: null,
  };
};

export const clearSuccessMessage = () => {
  return {
    type: REGISTER_USER,
    payload: null,
  };
};

export const updateSearchResult = (searchResult) => {
  return {
    type: SEARCH_RESULT,
    payload: searchResult,
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};
