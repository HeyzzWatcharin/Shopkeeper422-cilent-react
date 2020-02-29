import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Search from './Search';
import App from '../App'

export default class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.maincontainer}>
                <View style={styles.toptoolbar}>
                    <View style={styles.boxtoptoolbar}>
                        <Ionicons name="ios-arrow-dropright" size={32} color='white' />
                        <Ionicons name="ios-home" size={32} color='white'  />
                    </View>
                </View>
                <Search></Search>
                <ScrollView >

                    <View style={styles.bigcontainer}></View>
                    <View style={styles.bigcontainer}></View>
                    <View style={styles.bigcontainer}></View>
                    <View style={styles.bigcontainer}></View>
                    <View style={styles.bigcontainer}></View>
                    <View style={styles.bigcontainer}></View>
                    <View style={styles.bigcontainer}></View>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
    toptoolbar: {
        height: 70,
        marginTop: 30,
        backgroundColor: '#80D444',
        flexDirection: 'row',
        alignItems: 'center',
    },

    boxtoptoolbar: {
        marginHorizontal: 20,
        flexDirection: 'row',
        flex:1,
        justifyContent: 'space-between',
    },
    bigcontainer: {
        height: 250,
        backgroundColor: '#fff',
        marginTop: 30,
    }
});