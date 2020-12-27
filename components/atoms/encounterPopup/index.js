import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import PFP from '../../../assets/images/stuartlittle.png';
import Close from '../../../assets/images/close.png';
import {setEncounterPopup} from '../../../actions/popups';

const EncounterPopUp = (props) => {
    const dispatch = useDispatch();

    return (
        <TouchableOpacity style={styles.mainContainer} onPress={() => props.setEncounterVisible(false)} >
            <Image
                source={PFP}
                style={styles.pfp}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Thanks for the music :)</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    mainContainer: {
        height: 50,
        width: 220,
        backgroundColor: "#35927C",
        alignItems: "center",
        justifyContent:"flex-start",
        borderRadius: 20,
        position: "absolute",
        top: 50,
        left: 20,
        flexDirection: "row"
    },
    menuimg: {
        height: 20,
        width: 20
    },
    pfp: {
        height: 40,
        width: 40,
        borderRadius: 100,
        marginLeft: 5,
        borderColor: "#FFFFFF",
        borderWidth: 2
    },
    textContainer: {
        marginLeft: 5
    },
    text: {
        color: "#ffffff"
    }
});

export default EncounterPopUp;