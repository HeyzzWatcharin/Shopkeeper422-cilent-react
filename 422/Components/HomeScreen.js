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
import Slider from '../Components/Slider';
import Categorycontainer from '../HomeContainer/Categorycontainer'
import Snackcontainer from '../HomeContainer/Snackcontainer'
import Noodlecontainer from '../HomeContainer/Noodlecontainer'
import Lunchcontainer from '../HomeContainer/Lunchcontainer'
import Topsalecontainer from '../HomeContainer/Topsalecontainer'
// import Navbar from './Navbar'


export default class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.maincontainer}>
                {/* <Navbar/> */}
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
                            <Text style={styles.titletext}>Snack</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={true}>

                            <Snackcontainer />

                        </ScrollView>
                    </View>

                    <View style={styles.categorycontainer}>
                        <View style={styles.titlebigcontainer}>
                            <Text style={styles.titletext}>Instant noodle</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={true}>

                            <Noodlecontainer />

                        </ScrollView>
                    </View>

                    <View style={styles.categorycontainer}>
                        <View style={styles.titlebigcontainer}>
                            <Text style={styles.titletext}>Lunch box</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={true}>

                            <Lunchcontainer />

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
        flex:1,
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