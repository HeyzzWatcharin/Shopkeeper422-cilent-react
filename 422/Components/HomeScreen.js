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
    FlatList
} from 'react-native';
import Slider from '../Components/Slider';
import Topsalecontainer from '../HomeContainer/Topsalecontainer'
import Categorycontainer from '../HomeContainer/Categorycontainer'
import { enableScreens } from 'react-native-screens';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.maincontainer}>
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
                    <Topsalecontainer />
                    <Topsalecontainer />
                </View>

                {/* ------------------------------------------------------------------------ */}

                <View style={styles.categorycontainer}>
                    <View style={styles.titlebigcontainer}>
                        <Text style={styles.titletext}>Drink</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}>
                        <Categorycontainer navigation={navigation} />
                    </ScrollView>
                </View>

                <View style={styles.categorycontainer}>
                    <View style={styles.titlebigcontainer}>
                        <Text style={styles.titletext}>Drink</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}>
                        <Categorycontainer navigation={navigation} />
                    </ScrollView>
                </View>
            </ScrollView>
        </View >
    );
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
        flex: 1,
        height: 275,
        backgroundColor: '#fff',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    topsalecontainer: {
        height: 550,
        backgroundColor: '#fff'
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

    smallcontainer: {
        backgroundColor: '#fff',
        flex: 1,
        height: 200,
        marginHorizontal: 20,
        marginVertical: 40,
    },

    imageproduct: {
        width: 150,
        height: 125,
    },
    description: {
        paddingHorizontal: 10,
    },
    priceandqty: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pricetext: {
        color: '#51C400',
        fontWeight: 'bold',
        fontSize: 20,

    },
    qtyText: {
        color: '#717983',
        fontSize: 10,
    },
});