import { combineReducers } from "redux";
import { activeGroupReducer } from "./activeGroupReducer";
import { configsReducer } from "./configsReducer";
import { authReducer } from "./authReducer";
import { userProfileInfoReducer } from "./userProfileInfoReducer";
import { loaderReducer } from "./loaderReducer";
import { showOrHideBasketReducer } from "./showOrHideBasketReducer";
import { firstTimeBasketShowReducer } from "./firstTimeBasketShowReducer";
import { basketProcessingReducer } from "./basketProcessingReducer";
import { searchProcessingReducer } from "./searchProcessingReducer";
import { leftBarPositionReducer } from "./leftBarPositionReducer";
import { imgLoadingReducer } from "./checkImgLoading";

export const rootReducer = combineReducers({
  activeDishGroup: activeGroupReducer,
  activeLeftBarPosition: leftBarPositionReducer,
  isImgLoaded: imgLoadingReducer,
  configItems: configsReducer,
  currentAuthUser: authReducer,
  userProfileInfo: userProfileInfoReducer,
  loader: loaderReducer,
  isBasketShow: showOrHideBasketReducer,
  basketProcessing: basketProcessingReducer,
  isFirsTimeBasketShow: firstTimeBasketShowReducer,
  searchResult: searchProcessingReducer,
});
