import React,{ useState } from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';

const Event = (props) => {
    const handleDateString = () => {
        return String(new Date(props.event.date).toLocaleDateString({},
            {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"}
            )).toUpperCase();
    };
    return (
        <View
            style={styles.eventContainer}
        >   
            <Text style={styles.dateText}>{handleDateString()}</Text>
            <Text style={styles.nameText}>{props.event.name}</Text>
            <Text style={styles.dateText}>{props.event.type}</Text>
            <View style={{marginBottom: 20}}>
                <TouchableOpacity style={styles.buttonStyling} onPress={() => {props.onClick(props.event)}}>
                    <Text style={styles.buttonText}>Learn More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    eventContainer: {
        backgroundColor: "#4a3ddb",
        borderRadius: 20,
        height: 200,
        width: 200,
        padding: 20,
        marginRight: 20,
        marginLeft: 20,
        alignItems: "center"
    },
    dateText: {
        color: "#988FFA",
        textAlign: "center",
        alignSelf: "stretch",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 20
    },
    nameText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 20

    },
    buttonStyling: {
        backgroundColor: "#3d31bf",
        width: 160,
        height: 40,
        justifyContent:"center",
        alignContent:"center",
        borderRadius: 5
    },
    buttonText: {
        color: "#FFFFFF", 
        textAlign: "center", 
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 1
    }
});


export default Event;