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
import Slider from '../Components/Slider';
import Smallcontainer from '../HomeContainer/Smallcontainer'


export default class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.maincontainer}>
                <View style={styles.toptoolbar}>
                    <View style={styles.boxtoptoolbar}>
                        <Ionicons name="ios-arrow-dropright" size={32} color='white' />
                        <Ionicons name="ios-home" size={32} color='white' />
                    </View>
                </View>
                <Search></Search>

                {/* ---------------------------------------------------------------------------- */}
                <ScrollView >
                    <View style={styles.pscontainer}>
                        <Text style={styles.pstext}>Promotion</Text>
                    </View>
                    <Slider />
                    {/* ------------------------------------------------------------------------ */}
                    <View style={styles.pscontainer}>
                        <Text style={styles.pstext}>TOP SALE</Text>
                    </View>
                    <View style={styles.bigcontainer}>
                        <Smallcontainer />
                        <Smallcontainer />
                    </View>

                    <View style={styles.bigcontainer}>
                        <Smallcontainer />
                        <Smallcontainer />
                    </View>

                    {/* ------------------------------------------------------------------------ */}

                    <View style={styles.bigcontainer}>
                        <View style={styles.titlebigcontainer}>
                            <Text style={styles.titletext}>Drink</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>

                            <Smallcontainer />
                            <Smallcontainer />
                            <Smallcontainer />
                            <Smallcontainer />

                        </ScrollView>
                    </View>

                    <View style={styles.bigcontainer}>
                        <View style={styles.titlebigcontainer}>
                            <Text style={styles.titletext}>Drink</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>

                            <Smallcontainer />
                            <Smallcontainer />
                            <Smallcontainer />
                            <Smallcontainer />

                        </ScrollView>
                    </View>
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
        flex: 1,
        justifyContent: 'space-between',
    },
    bigcontainer: {
        height: 275,
        backgroundColor: '#fff',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    titlebigcontainer: {
        height: 50,
        position: 'absolute',

    },
    pscontainer: {
        height: 60,
        backgroundColor: '#0C5800',
        marginTop: 20,
        alignItems: 'center',
    },
    pstext: {
        color: '#fff',
        alignItems: 'center',
        padding: 15,
        fontSize: 18,
    },
    titletext: {
        paddingTop: 10,
        paddingLeft: 20,
        fontSize: 20,
        color: '#80D444',
    },
});