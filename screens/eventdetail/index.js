import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, FlatList} from 'react-native';
import {setEvent} from '../../actions/events';
import {setEventPopup} from '../../actions/popups';
import { useNavigation } from '@react-navigation/native';

import Art from '../../assets/images/artists5.jpg';
import Art1 from '../../assets/images/artists4.jpg';
import Art2 from '../../assets/images/artists1.jpg';
import Art3 from '../../assets/images/artists2.jpg';
import EventSnippet from '../../components/atoms/eventsnippet';

const events = [
    {id: 0, date: new Date("01/01/2021"), name: "070 Shake", info: "", album: "Modus Vivendi", photo: Art, type:"Virtual"},
    {id: 1, date: new Date("01/03/2021"), name: "Tyler, the Creator", album: "IGOR", photo: Art3, info: "", type:"Virtual"},
    {id: 2, date: new Date("01/05/2021"), name: "Kid Cudi", info: "", album: "Man on the Moon 3", photo: Art2, type:"Virtual"},
    {id: 3, date: new Date("01/09/2021"), name: "Brockhampton", info: "", album: "Saturation 2", photo: Art1, type:"Virtual"},
    {id: 4, date: new Date("01/01/2021"), name: "070 Shake", info: "", album: "Modus Vivendi",photo: Art, type:"Virtual"},
    {id: 5, date: new Date("01/03/2021"), name: "Tyler, the Creator", album: "IGOR",photo: Art3, info: "", type:"Virtual"},
    {id: 6, date: new Date("01/05/2021"), name: "Kid Cudi", info: "", album: "Man on the Moon 3",photo: Art2, type:"Virtual"},
    {id: 7, date: new Date("01/09/2021"), name: "Brockhampton", info: "", album: "Saturation 2",photo: Art1, type:"Virtual"},
]

const getEvent = state => state.event;

const EventDetail = (props) => {
    const storeEvent = useSelector(getEvent);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onClickWrapper = () => {
        dispatch(setEvent({}));
        dispatch(setEventPopup(false));
        navigation.navigate("Dashboard");
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#0B0518", height: "100%"}}>
            <View style={styles.mainContainer}>
                    <View style={styles.mainEntry}>
                        <View style={styles.upper}>
                            <Image
                                source={Art}
                                style={styles.albumArt}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.dateText}>JANUARY 01, 2021</Text>
                                <Text style={styles.artistText}>070 Shake</Text>
                                <Text style={styles.tourText}>Modus Vivendi Tour</Text>
                            </View>
                        </View>
                        <View style={{width: "100%", marginTop: 20, alignContent: "center", alignItems: "center"}}>
                            <TouchableOpacity style={styles.buttonStyling}>
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height: 450}}>
                        <FlatList
                            data={events}
                            renderItem={({item, index}) => <EventSnippet event={item} index={index} />}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => {onClickWrapper()}}>
                        <Text style={styles.buttonText}>Go Back</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        alignItems: "center",
        alignSelf: "stretch",
        alignContent: "center",
    },
    mainEntry: {
        height:220,
        width: 375,
        flexDirection: "column",
        justifyContent:"flex-start",
        alignItems: "flex-start",
        backgroundColor: "#4a3ddb",
        borderRadius: 20,
        marginBottom: 10
    },
    upper: {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    albumArt: {
        height: 120,
        width: 120,
        borderRadius: 5,
        borderColor: "#FFFFFF",
        borderWidth: 4
    },
    textContainer: {
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: 215,
        height: 120
    }, 
    dateText: {
        color: "#988FFA",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: .5
    },
    artistText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
    },
    tourText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
    infoContainer: {
        width: 335,
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20
    },
    marker: {
        backgroundColor: "#FFFFFF",
        width: 80,
        paddingTop: 5,
        paddingBottom: 5,
        alignContent: "center",
        alignItems:"center",
        borderRadius: 5
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
    },
    button: {
        backgroundColor: "#3d31bf",
        width: 160,
        height: 40,
        justifyContent:"center",
        alignContent:"center",
        borderRadius: 5,
        marginTop: 20
    }
});

export default EventDetail;