const encounters = (state = {}, action) => {
    const {type,payload} = action;

    switch(type) {
        case "ENCOUNTERS_SETENCOUNTER":
            state = payload;
            return {...state};
        default:
            return state;
    }
};

export default encounters;