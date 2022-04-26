import { combineReducers } from "redux";
import { loadingBarReducer as loadingBar } from "react-redux-loading-bar";


const rootReducer = combineReducers({
    loadingBar,
});

export default rootReducer;