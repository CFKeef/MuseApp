import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PFP from '../../../assets/images/keefpfp.png';

const HeaderNav = (props) => {
    const navigation = useNavigation();
    const [expanded, setExpanded] = useState(false);

    const handleDropdownStyling = () => {
        if(expanded) return styles.dropDownbg
    };

    const handleDropdown = () => {
        if(expanded) 
            return (
                <View style={styles.dropdown}>
                    <TouchableOpacity onPress={() => navigation.navigate("Options")}>
                        <Text style={styles.dropdowntext}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>  navigation.navigate("Profile")}>
                        <Text style={styles.dropdowntext}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>  navigation.navigate("Login")}>
                        <Text style={styles.dropdowntext}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            );
    };

    return (
        <View style={styles.mainContainer}> 
            <View style={[styles.profileContainer, handleDropdownStyling()]}>
                {handleDropdown()}
                <TouchableOpacity onPress={() => {setExpanded(!expanded)}}
                    style={[styles.photoContainer, ]}
                >   
                    <Image
                        source={PFP}
                        style={styles.image}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignSelf: "stretch",
        alignContent: "center",
        alignItems: "center",
        height: 50
    },
    button: {
        height: 40,
        backgroundColor: "#fefe00",
        padding: 10,
        borderRadius: 20,
        width: 100,
        marginLeft: 20
    },
    buttonText: {
        color: "#000000", 
        textAlign: "center", 
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 1
    },
    profileContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
        alignItems: 'center',
        marginRight: 20
    },
    photoContainer: {
        backgroundColor: "#150E39",
        borderColor: "#4A3DDB",
        borderWidth: 4,
        borderRadius: 100,
    },  
    image: {
        height: 50,
        width: 50,
        borderRadius: 100
    },
    dropdown: {
        backgroundColor: "#3d31bf",
        flexDirection: "row",
        paddingLeft: 10,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    dropdowntext: {
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: 14,
        marginRight: 20
    },
    dropDownbg: {
        backgroundColor: "#3d31bf",
        borderRadius: 5
    }
});

export default HeaderNav;