import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, FlatList} from 'react-native';
import {setArtist} from '../../actions/artists';
import {setArtistPopup} from '../../actions/popups';
import { useNavigation } from '@react-navigation/native';

import Artist from '../../components/atoms/artist';
import Art from '../../assets/images/artists5.jpg';
import Art1 from '../../assets/images/artists4.jpg';
import Art2 from '../../assets/images/artists1.jpg';
import Art3 from '../../assets/images/artists2.jpg';

const artists = [
    {id: 0, name: "Kid Cudi" , photo: Art2, listeners: "253" },
    {id: 1, name: "Tyler The Creator", photo: Art3, listeners: "284" },
    {id: 3, name: "Brockhampton", photo: Art1, listeners: "325" },
    {id: 4, name: "070 Shake", photo: Art, listeners: "178" },
    {id: 5, name: "Kid Cudi" , photo: Art2, listeners: "253" },
    {id: 6, name: "Tyler The Creator", photo: Art3, listeners: "284" },
    {id: 7, name: "Brockhampton", photo: Art1, listeners: "325" },
    {id: 8, name: "070 Shake", photo: Art, listeners: "178" },
]

const getArtist = state => state.artist;

const ArtistDetail = (props) => {
    const storeArtist = useSelector(getArtist);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const onClickWrapper = () => {
        dispatch(setArtist({}));
        dispatch(setArtistPopup(false));
        navigation.navigate("Dashboard");
    };
    
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#0B0518", height: "100%"}}>
            <View style={styles.mainContainer}>
                    <View style={styles.mainEntry}>
                        <View style={styles.upper}>
                            <Image
                                source={Art2}
                                style={styles.albumArt}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.dateText}>Number 1</Text>
                                <Text style={styles.artistText}>Kid Cudi</Text>
                                <Text style={styles.tourText}>253 Listeners</Text>
                            </View>
                        </View>
                        <View style={{width: "100%", marginTop: 20, alignContent: "center", alignItems: "center"}}>
                            <TouchableOpacity style={styles.buttonStyling}>
                                <Text style={styles.buttonText}>Listen</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height: 450}}>
                        <FlatList
                            data={artists}
                            renderItem={({item, index}) => <Artist artist={item} index={index} />}
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

export default ArtistDetail;