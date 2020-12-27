import React,{ useState } from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';

import PFP from '../../../assets/images/keefpfp.png';

const MiniProfile = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleDropdownStyling = () => {
        if(expanded) return styles.dropDownbg
    };
    

    const handleDropdown = () => {
        if(expanded) 
            return (
                <View style={styles.dropdown}>
                    <TouchableOpacity onPress={() => props.navigateToSettings()}>
                        <Text style={styles.dropdowntext}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigate("Profile")}>
                        <Text style={styles.dropdowntext}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigate("Login")}>
                        <Text style={styles.dropdowntext}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            );
    };

    return (
        <View style={[styles.mainContainer, handleDropdownStyling()]}>
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
    )
};

const styles = StyleSheet.create({
    mainContainer: {
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
        marginRight: 5
    },
    dropDownbg: {
        backgroundColor: "#3d31bf",
        borderRadius: 5
    }
});


export default MiniProfile;