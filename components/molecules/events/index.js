import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {localip} from '../../../env';
import axios from 'axios';
import Event from '../../atoms/event';

const Events = (props) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getRecommendedEvents = async () => {
            axios.get(`${localip}/getEvents`)
            .then(res =>{
                setEvents(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        };

        getRecommendedEvents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.upperText}>Suggested Events</Text>
            </View>
            <FlatList
                style={{width: "100%", height: '100%'}}
                horizontal={true}
                data={events}
                renderItem={({item}) => <Event event={item} selected={props.selected} />}
                keyExtractor={(event) => String(event.id)}
                initialScrollIndex={0}
                removeClippedSubviews={false}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.posContainer}>
                        <Text style={styles.emptyList}>Nothing near you</Text>
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
        height: 230,
        marginBottom: 20,
        zIndex: 10
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
    },
    upperText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#BAA8FF",
        textAlign: "left"
    },
    textContainer: {
        marginBottom: 10,
        alignSelf:"stretch",
        marginLeft: 20
    },
});

export default Events;