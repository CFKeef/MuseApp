import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';


const Artist = (props) => {
    const handleBackgroundStyling = () => {
        return props.index % 2 === 0 ? {backgroundColor: "#35927C"} : {backgroundColor: "#E33B4E"}
    };
    const handleButtonStyling = () => {
        return props.index % 2 === 0 ? {backgroundColor: "#43b79c"} : {backgroundColor: "#ce1d31"}
    }

    return (
        <View style={[styles.mainContainer, handleBackgroundStyling()]}>
            <View style={{flexDirection: "row"}}>
                <Image
                    source={props.artist.photo}
                    style={styles.img}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{props.artist.name}</Text>
                    <Text style={styles.album}>{props.artist.listeners} Listeners</Text>
                </View>
            </View>
            <TouchableOpacity style={[styles.button,handleButtonStyling()]}>
                <Text style={styles.btntext}>View Artist</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        height: 80,
        width: 375,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    img: {
        height: 50,
        width: 50,
        borderColor: "#FFFFFF",
        borderWidth: 4,
        borderRadius: 100,
        marginLeft: 10
    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: 20,
        height: 50
    },
    name: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: .5
    },
    album: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "500",
        letterSpacing: .5
    },
    button: {
        backgroundColor: "#FFFFFF",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginRight: 10
    },
    btntext: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "500",
        padding: 5,
        
    }
});

export default Artist;