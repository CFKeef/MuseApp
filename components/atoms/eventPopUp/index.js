import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setEvent} from '../../../actions/events';
import {setEventPopup} from '../../../actions/popups';
import Close from '../../../assets/images/close.png';

const EventPopUp = () => {
    const dispatch = useDispatch();

    const onClickWrapper = () => {
        dispatch(setEvent({}));
        dispatch(setEventPopup(false));
    };

    return (
        <View style={styles.mainContainer}>
                <View style={styles.menuContainer}>
                    <TouchableOpacity onPress={() => {onClickWrapper()}}>
                        <Text>Go Back</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: 300,
        width: 300,
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: "#4a3ddb",
        position: "absolute",
        bottom: 0,
        zIndex: 5000
    },
    menuContainer: {
        alignSelf: "stretch",
        justifyContent: "flex-end"
    },
    closeBtn: {
        height: 20,
        width: 20
    }
});

export default EventPopUp;