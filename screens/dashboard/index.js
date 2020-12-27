import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';

import HeaderNav from '../../components/molecules/headernav';
import Events from '../../components/molecules/events';
import LocalTray from '../../components/molecules/localtray';
import PlayArea from '../../components/molecules/playarea';
import { useNavigation } from '@react-navigation/native';

// redux pulls
const getArtist = state => state.artist;
const getEvent = state => state.event;
const getSettings = state => state.settings;
const getPopups = state => state.popups;
const getEncounter = state => state.artist;

const Dashboard = () => {
    const storeArtist = useSelector(getArtist);
    const storeEvent = useSelector(getEvent);
    const storeSettings = useSelector(getSettings);
    const storePopups = useSelector(getPopups);
    const storeEncounter = useSelector(getEncounter);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const handlePopUp = () => {
        switch(true) {
            // Event flag
            case storePopups.eventFlag:
                navigation.navigate("EventDetail");
                break;
            // Artist flag
            // Encounter Flag
            // Song Flag
            // Marco Flag
            default:
                break;
        };
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#0B0518", height: "100%"}}>
            {handlePopUp()}
            <View style={styles.mainContainer}>
                <HeaderNav />
                <Events />
                <LocalTray />
                <View style={styles.footerContainer}>
                    <PlayArea/>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        height: "100%",
        zIndex: 10
    },
    footerContainer: {
        width: "100%",
        alignItems: "center",
    }
});

export default Dashboard;