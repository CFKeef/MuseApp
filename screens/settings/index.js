import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import Logo from '../../assets/images/museYellow.png';
import GenericButton from '../../components/atoms/genericbutton';

const Settings = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#0B0518"}}>
            <View style={styles.mainContainer}>
               <Text>Settings</Text>
               <View>
               
               
               </View>
               <GenericButton
                    message={"Dashboard"}
                    action={navigation.navigate("Dashboard")}
                    textColor={"#0B0518"}
                    color={"#fefe00"}
               />
               <Image
                    style={styles.logo}
                    source={Logo}
                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30
    },
    logo: {
        height: 75,
        width:  220
    },
    headerContainer: {
        marginTop: 60
    },
    headerText: {
        fontSize:26,
        fontWeight: "700",
        color: "#ffffff"
    },
    hyperLinkTextContainer: {
        marginTop: 30
    }
});

export default Settings;