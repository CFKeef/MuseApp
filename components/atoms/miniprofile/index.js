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
                    <TouchableOpacity>
                        <Text style={styles.dropdowntext}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.dropdowntext}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.dropdowntext}>Log out</Text>
                    </TouchableOpacity>
                </View>
            );
    };

    return (
        <View style={[styles.mainContainer, handleDropdownStyling()]}>
            <TouchableOpacity onPress={() => {setExpanded(!expanded)}}
                style={[styles.photoContainer, ]}
            >   
                <Image
                    source={PFP}
                    style={styles.image}
                />
            </TouchableOpacity>
            {handleDropdown()}
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
        position: "absolute",
        left: 320,
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
        right: 0,
        top: 60,
        backgroundColor: "#4A3DDB",
        position: "absolute",
        paddingRight: 5.6,
        paddingLeft: 5.6,
        paddingTop: 10,
        paddingBottom: 5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius: 5,
    },
    dropdowntext: {
        paddingBottom: 10,
        color: "#BAA8FF",
        fontWeight: "600",
        fontSize: 14,
    },
    dropDownbg: {
        backgroundColor: "#4A3DDB",
        padding: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    }
});


export default MiniProfile;