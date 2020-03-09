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
    ListView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Search from './Search';
import Slider from '../Components/Slider';
import Categorycontainer from '../HomeContainer/Categorycontainer'
import Topsalecontainer from '../HomeContainer/Topsalecontainer'


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

                <Search />

                {/* ---------------------------------------------------------------------------- */}
                <ScrollView >
                    <View style={styles.pscontainer}>
                        <Text style={styles.pstitle}>Promotion</Text>
                    </View>
                    <Slider />
                    {/* ------------------------------------------------------------------------ */}
                    <View style={styles.pscontainer}>
                        <Text style={styles.pstitle}>TOP SALE</Text>
                    </View>
                    <View style={styles.topsalecontainer}>
                    <Topsalecontainer/>
                    <Topsalecontainer/>
                    </View>

                    {/* ------------------------------------------------------------------------ */}

                    <View style={styles.categorycontainer}>
                        <View style={styles.titlebigcontainer}>
                            <Text style={styles.titletext}>Drink</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={true}>

                            <Categorycontainer />

                        </ScrollView>
                    </View>

                    <View style={styles.categorycontainer}>
                        <View style={styles.titlebigcontainer}>
                            <Text style={styles.titletext}>Drink</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={true}>

                            <Categorycontainer />

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
    categorycontainer: {
        height: 275,
        backgroundColor: '#fff',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    topsalecontainer:{
        height:550,
        backgroundColor:'#fff'
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
    pstitle: {
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