import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {localip} from '../../../env';
import axios from 'axios';
import ArtistBubble from '../../atoms/artistbubble';
import {useDispatch} from 'react-redux'

// Redux
import {setArtist} from '../../../actions/artists';
import {setArtistPopup} from '../../../actions/popups';

const LocalTray = (props) => {
    const [artists, setArtists] = useState([]);
    const dispatch = useDispatch();

    const onClickWrapper = (item) => {
        dispatch(setArtist(item));
        dispatch(setArtistPopup(true));
    };

    useEffect(() => {
        const getArtists = async () => {
            axios.get(`${localip}/getArtists`)
            .then(res =>{
                setArtists(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        };

        getArtists();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.upperText}>Popular Around You</Text>
            </View>
            <FlatList
                style={{width: "100%", height: '100%'}}
                horizontal={true}
                data={artists}
                renderItem={({item,index}) => <ArtistBubble artist={item} index={index} onClick={() => onClickWrapper(item)} />}
                keyExtractor={(artist) => String(artist.id)}
                initialScrollIndex={0}
                removeClippedSubviews={false}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.posContainer}>
                        <Text style={styles.emptyList}>Waiting on more information</Text>
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
        height: 250,
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

export default LocalTray;