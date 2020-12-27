import React,{ useState } from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';

const ArtistBubble = (props) => {
    const handleColorStyling = () => {
        return props.index % 2 === 0 ? {backgroundColor: "#35927C"} : {backgroundColor: "#E33B4E"}
    }
    const handleTextStyling = () => {
        return props.index % 2 === 0 ? {color: "#35927C"} : {color: "#E33B4E"}
    }
    const handleButtonStyling = () => {
        return props.index % 2 === 0 ? {backgroundColor: "#43b79c"} : {backgroundColor: "#ce1d31"}
    }
    return (
        <View
            style={[styles.songContainer, handleColorStyling()]}
        >       
        <View style={styles.headerContainer}>
            <View style={styles.rankingContainer}>
                <Text style={[styles.posText, handleTextStyling()]}>
                    #{props.index + 1}
                </Text>
            </View>
            <Image
                source={
                    {
                        uri: props.artist.photo
                    }
                }
                style={styles.artImage}
            />  
        </View>
            <Text style={styles.artistText}>
                {props.artist.name}
            </Text>
            <View>
                <Text style={styles.amountText}>
                    {props.artist.listeners} Listeners
                </Text>
            </View>
            <TouchableOpacity onPress={() => {props.onClick()}} style={[styles.artistBtn, handleButtonStyling()]}>
                <Text style={[styles.btnText]}>View Artist</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    songContainer: {
        alignSelf: "stretch",
        width: 200,
        alignItems: "center", 
        justifyContent: "flex-start",
        height: 220,
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,
        borderRadius:20,
        padding: 20
    },
    headerContainer: {
        alignSelf: "stretch",
        alignItems:"center"
    },  
    artImage: {
        height: 60,
        width: 60,
        borderRadius: 100,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        marginBottom: 10
    },
    playButton: {
        height: 20,
        width: 20,
    },
    rankingContainer: {
        padding: 5,
        backgroundColor: "#FFFFFF",
        borderRadius: 100,
        alignSelf: "flex-start",
        position: "absolute",
        left: 0
    },
    posText: {
        textAlign: "left",
        alignSelf: "stretch",
        fontSize: 14,
        fontWeight: "600",
    },
    artistText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 10
    },
    amountText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 10
    },
    artistBtn: {
        backgroundColor: "#ce1d31",
        width: 160,
        height: 40,
        justifyContent:"center",
        alignContent:"center",
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 20
    },
    btnText: {
        color: "#FFFFFF",
        textAlign: "center", 
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 1
    }
});


export default ArtistBubble;