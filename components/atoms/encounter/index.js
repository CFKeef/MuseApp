import React,{ useState } from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setEncounterPopup} from '../../../actions/popups';

const Encounter = (props) => {
    const dispatch = useDispatch();

    const handleBorderStyling = () => {
        switch(true) {
            case props.encounter.match <= 25:
                return {borderColor: "#E33B4E"}
            case props.encounter.match <= 50:
                return {borderColor: "#cedb3d"}
            case props.encounter.match <= 75:
                return {borderColor: "#4A3DDB"}
            case props.encounter.match <= 100:
                return {borderColor: "#35927C"}
            default:
                return {borderColor: "#4A3DDB"}
        }
    };
    return (
        <TouchableOpacity onPress={() => {props.setEncounterVisible(!props.encounterVisible)}}
            style={styles.photoContainer}
        >   
            <Image
                source={{
                    uri: props.encounter.pfp
                }}
                style={[styles.image, handleBorderStyling()]}
            />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    photoContainer: {
        backgroundColor: "#150E39",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10
    },  
    image: {
        height: 50,
        width: 50,
        borderRadius: 100,
        borderWidth: 4,
    },
});


export default Encounter;