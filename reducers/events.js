const events = (state = {}, action) => {
    const {type,payload} = action;

    switch(type) {
        case "EVENTS_SETEVENT":
            state = payload;
            return {...state};
        default:
            return state;
    }
};

export default events;