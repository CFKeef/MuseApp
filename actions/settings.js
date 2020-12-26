export const setContactTrace = payload => {
    return {
        type: "SETTINGS_SET_CONTACT_TRACE",
        payload: payload
    }
}

export const setAnonymous = payload => {
    return {
        type: "SETTINGS_SET_ANONYMOUS",
        payload: payload
    }
}