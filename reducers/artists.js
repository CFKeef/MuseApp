const artists = (state = {}, action) => {
    const {type,payload} = action;

    switch(type) {
        case "ARTISTS_SETARTIST":
            state = payload;
            return {...state};
        default:
            return state;
    }
};

export default artists;