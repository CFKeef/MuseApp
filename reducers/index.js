import { combineReducers } from "redux";

// import reducers
import settings from './settings';
// export the reducer
const rootReducer = combineReducers({
    "settings": settings
});

export default rootReducer;