const popups = (state = {eventFlag: false, artistFlag: false, encounterFlag: false, songFlag: false, marcoFlag: false}, action) => {
    const {type,payload} = action;

    switch(type) {
        case "POPUP_SETEVENT":
            state.eventFlag = payload;
            return {...state};
        case "POPUP_SETARTIST":
            state.artistFlag = payload;
            return {...state};
        case "POPUP_SETENCOUNTER":
            state.encounterFlag = payload;
            return {...state};
        case "POPUP_SETSONG":
            state.songFlag = payload;
            return {...state};
        case "POPUP_SETMARCO":
            state.marcoFlag = payload;
            return {...state};
        default:
            return state;
    }
};

export default popups;