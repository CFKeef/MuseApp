import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, StyleSheet, Text, SafeAreaView, Image, Switch, TouchableOpacity} from 'react-native';
import GenericButton from '../../components/atoms/genericbutton';

// redux
const getSettings = state => state.settings
import {setContactTrace, setAnonymous} from '../../actions/settings';
import { useNavigation } from '@react-navigation/native';


const Options = () => {
    const storeSettings = useSelector(getSettings);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#0B0518"}}>
            <View style={styles.mainContainer}>
                <Text style={styles.header}>Settings</Text>
                <View style={styles.entry}>
                    <View style={styles.textContainer}>
                        <Text style={styles.entryText}>Contact Tracing</Text>
                        <Text style={styles.subText}>Will alert you of any contact</Text>
                        <Text style={styles.subText}>with positively infected users</Text>
                    </View>
                    <Switch trackColor={{true: "#E33B4E", false: "grey"}} value={storeSettings.contactTrace} onValueChange={() => dispatch(setContactTrace(!storeSettings.contactTrace))} />
                </View>
                <View style={styles.entry}>
                    <View style={styles.textContainer}>
                        <Text style={styles.entryText}>Anonymous Mode</Text>
                        <Text style={styles.subText}>Won't share your profile with</Text>
                        <Text style={styles.subText}>other users</Text>
                    </View>
                    <Switch trackColor={{true: "#E33B4E", false: "grey"}} value={storeSettings.anonymous} onValueChange={() => dispatch(setAnonymous(!storeSettings.anonymous))} />
                </View>
                    
                <View style={[styles.entry, {height: 200}]}>
                    <View style={styles.textContainer}>
                        <Text style={styles.entryText}>Delete Account</Text>
                        <Text style={styles.subText}>Will delete your account from our servers</Text>
                        <Text style={styles.subText}>but :(</Text>

                        <TouchableOpacity style={styles.buttonStyling} onPress={() => {}}>
                            <Text style={styles.buttonText}>Delete Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <GenericButton
                    message={"Back to Dashboard"}
                    action={() => navigation.goBack()}
                    textColor={"#0B0518"}
                    color={"#fefe00"}
                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    header: {
        fontSize: 22,
        fontWeight: "600",
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 20
    },
    textContainer: {
        justifyContent: "space-between"
    },
    entry: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-evenly",
        backgroundColor: "#4A3DDB",
        height: 120,
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 20
    },
    entryText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
        textAlign: "left",
        marginBottom: 10
    },
    subText: {
        width: "100%",
        color: "#ffffff"
    },
    buttonStyling: {
        backgroundColor: "#3d31bf",
        width: 160,
        height: 40,
        justifyContent:"center",
        alignContent:"center",
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 20
    },
    buttonText: {
        color: "#FFFFFF", 
        textAlign: "center", 
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 1
    }
});

export default Options;