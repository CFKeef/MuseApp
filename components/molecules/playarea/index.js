import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import SongBlock from '../../atoms/songblock';
import EncounterTray from '../../atoms/encountertray';

const PlayArea = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.upperText}>Encountered</Text>
            </View>
            
            <EncounterTray 
                setEncounterVisible={props.setEncounterVisible}
                encounterVisible={props.encounterVisible}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Currently Playing</Text>
            </View>
            <SongBlock />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        width: "90%",
        justifyContent: "center",
        marginBottom: 20,
    },  
    textContainer: {
        marginBottom: 10
    },
    text: {
        fontSize: 12,
        fontWeight: "600",
        color: "#BAA8FF",
        textAlign: "center"
    },
    upperText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#BAA8FF",
        textAlign: "left"
    }
});

export default PlayArea;