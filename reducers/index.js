import { combineReducers } from "redux";

// import reducers
import settings from './settings';
import artists from './artists';
import events from './events';
import encounters from './encounter';
import popups from './popups';

// export the reducer
const rootReducer = combineReducers({
    "settings": settings,
    "events": events,
    "artists": artists,
    "encounters": encounters,
    "popups": popups
});

export default rootReducer;