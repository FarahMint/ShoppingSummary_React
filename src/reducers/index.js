import { combineReducers } from "redux";
import promoCodeReducer from "./promoCodeReducer";

export default combineReducers({
  promoCode: promoCodeReducer
});

// now can appy it to whenever it needs to be applied to.
