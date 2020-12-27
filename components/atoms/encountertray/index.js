import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import axios from 'axios';
import Encounter from '../encounter';
import SectionHeader from "../sectionheader";
import {localip} from '../../../env';

const EncounterTray = (props) => {
    const [encountered, setEncounters] = useState([]);

    useEffect(() => {
        const getEncounters = async () => {
            axios.get(`${localip}/getUserData`)
            .then(res =>{
                setEncounters(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        };

        getEncounters();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                style={{width: "100%", height: '100%'}}
                horizontal={true}
                data={encountered}
                renderItem={({item}) => <Encounter encounter={item} setEncounterVisible={props.setEncounterVisible} encounterVisible={props.encounterVisible} />}
                keyExtractor={(encounter) => String(encounter.id)}
                initialScrollIndex={0}
                removeClippedSubviews={false}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.posContainer}>
                        <Text style={styles.emptyList}>No one yet</Text>
                    </View>
                }
            />
        </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        width:"100%",
        alignItems: "center", 
        justifyContent: "center",
        height: 50,
        marginBottom: 20,
    },
    posContainer: {
        alignSelf: "stretch",
        alignItems: "center", 
        justifyContent: "center",
    },  
    emptyList: {
        marginTop: 250,
        fontSize: 20,
        marginLeft: 20,
        marginRight: 20,
        color: "#AAAAAA"
    }
});

export default EncounterTray;