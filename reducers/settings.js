const settings = (state = {anonymous: false, contactTrace: false}, action) => {
    const {type,payload} = action;

    switch(type) {
        case "SETTINGS_SET_ANONYMOUS":
            state.anonymous = payload;
            return {...state};
        case "SETTINGS_SET_CONTACT_TRACE":
            state.contactTrace = payload;
            return {...state};
        default:
            return state;
    }
};

export default settings;