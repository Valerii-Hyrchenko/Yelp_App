import { combineReducers } from "redux";
import { activeGroupReducer } from "./activeGroupReducer";
import { configsReducer } from "./configsReducer";
import { authReducer } from "./authReducer";
import { loaderReducer } from "./loaderReducer";
import { showOrHideBasketReducer } from "./showOrHideBasketReducer";
import { firstTimeBasketShowReducer } from "./firstTimeBasketShowReducer";
import { basketProcessingReducer } from "./basketProcessingReducer";
import { searchProcessingReducer } from "./searchProcessingReduser";

export const rootReducer = combineReducers({
  activeDishGroup: activeGroupReducer,
  configItems: configsReducer,
  currentAuthUser: authReducer,
  loader: loaderReducer,
  isBasketShow: showOrHideBasketReducer,
  basketProcessing: basketProcessingReducer,
  isFirsTimeBasketShow: firstTimeBasketShowReducer,
  searchResult: searchProcessingReducer,
});
