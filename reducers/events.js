const events = (state = {}, action) => {
    const {type,payload} = action;

    switch(type) {
        case "EVENTS_SETEVENT":
            console.log(payload);
            state = payload;
            console.log(state);
            return {...state};
        default:
            return state;
    }
};

export default events;