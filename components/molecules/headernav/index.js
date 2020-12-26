import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';

import SectionHeader from '../../atoms/sectionheader';
import MiniProfile from '../../atoms/miniprofile';

const HeaderNav = (props) => {
    return (
        <View style={styles.mainContainer}> 
                <SectionHeader text={props.text} />
                <MiniProfile navigation={props.navigation} />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "stretch",
        alignContent: "center",
        alignItems: "center",
        height: 50
    },
});

export default HeaderNav;