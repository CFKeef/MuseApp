import React, {useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';

import HeaderNav from '../../components/molecules/headernav';
import Events from '../../components/molecules/events';
import LocalTray from '../../components/molecules/localtray';
import PlayArea from '../../components/molecules/playarea';
import GenericButton from '../../components/atoms/genericbutton';

const Dashboard = ({navigation}) => {
    const [polo, setPolo] = useState(false);
    const [settings, setSettings] = useState(false);

    const openPolo = () => {
        console.log("TEST");
    };

    const navigate = (route) => {
        navigation.navigate(route)
    }
    
    const handleSettingsPopUp = () => {
        return (
            <View style={styles.settings}>
            
            </View>
        )
    };
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#0B0518", height: "100%"}}>
            <View style={styles.mainContainer}>
                <HeaderNav />
                <Events/>
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