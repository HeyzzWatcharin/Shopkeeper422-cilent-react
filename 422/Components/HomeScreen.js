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
                <ScrollView >
                    <View style={styles.pscontainer}>
                        <Text style={styles.pstext}>Promotion</Text>
                    </View>
                    <View style={styles.bigcontainer}>

                        <View elevation={5} style={styles.smallcontainer}>
                            <View style={styles.productcontainer}>
                                <Image
                                    resizeMode='cover' style={styles.productimage} source={require('../Image/X.png')}
                                />
                            </View>
                            <Text style={styles.detailtext}>
                                Name : xxxx
                            </Text>
                            <Text style={styles.detailtext}>
                                Price : xxxx Baht
                            </Text>
                            <Text style={styles.detailtext}>
                                QTY : xxxx
                            </Text>

                        </View>

                        <View elevation={5} style={styles.smallcontainer}>
                            <View style={styles.productcontainer}>
                                <Image
                                    resizeMode='cover' style={styles.productimage} source={require('../Image/X.png')}
                                />
                            </View>
                            <Text style={styles.detailtext}>
                                Name : xxxx
                            </Text>
                            <Text style={styles.detailtext}>
                                Price : xxxx Baht
                            </Text>
                            <Text style={styles.detailtext}>
                                QTY : xxxx
                            </Text>

                        </View>

                    </View>


                    <View style={styles.bigcontainer}>

                        <View elevation={5} style={styles.smallcontainer}>
                            <View style={styles.productcontainer}>
                                <Image
                                    resizeMode='cover' style={styles.productimage} source={require('../Image/X.png')}
                                />
                            </View>
                            <Text style={styles.detailtext}>
                                Name : xxxx
                            </Text>
                            <Text style={styles.detailtext}>
                                Price : xxxx Baht
                            </Text>
                            <Text style={styles.detailtext}>
                                QTY : xxxx
                            </Text>

                        </View>

                        <View elevation={5} style={styles.smallcontainer}>
                            <View style={styles.productcontainer}>
                                <Image
                                    resizeMode='cover' style={styles.productimage} source={require('../Image/X.png')}
                                />
                            </View>
                            <Text style={styles.detailtext}>
                                Name : xxxx
                            </Text>
                            <Text style={styles.detailtext}>
                                Price : xxxx Baht
                            </Text>
                            <Text style={styles.detailtext}>
                                QTY : xxxx
                            </Text>

                        </View>

                    </View>


                    <View style={styles.bigcontainer}>

                        <View elevation={5} style={styles.smallcontainer}>
                            <View style={styles.productcontainer}>
                                <Image
                                    resizeMode='cover' style={styles.productimage} source={require('../Image/X.png')}
                                />
                            </View>
                            <Text style={styles.detailtext}>
                                Name : xxxx
                            </Text>
                            <Text style={styles.detailtext}>
                                Price : xxxx Baht
                            </Text>
                            <Text style={styles.detailtext}>
                                QTY : xxxx
                            </Text>

                        </View>

                        <View elevation={5} style={styles.smallcontainer}>
                            <View style={styles.productcontainer}>
                                <Image
                                    resizeMode='cover' style={styles.productimage} source={require('../Image/X.png')}
                                />
                            </View>
                            <Text style={styles.detailtext}>
                                Name : xxxx
                            </Text>
                            <Text style={styles.detailtext}>
                                Price : xxxx Baht
                            </Text>
                            <Text style={styles.detailtext}>
                                QTY : xxxx
                            </Text>

                        </View>

                    </View>



                    <View style={styles.bigcontainer}>

                        <View elevation={5} style={styles.smallcontainer}>
                            <View style={styles.productcontainer}>
                                <Image
                                    resizeMode='cover' style={styles.productimage} source={require('../Image/X.png')}
                                />
                            </View>
                            <Text style={styles.detailtext}>
                                Name : xxxx
                            </Text>
                            <Text style={styles.detailtext}>
                                Price : xxxx Baht
                            </Text>
                            <Text style={styles.detailtext}>
                                QTY : xxxx
                            </Text>

                        </View>

                        <View elevation={5} style={styles.smallcontainer}>
                            <View style={styles.productcontainer}>
                                <Image
                                    resizeMode='cover' style={styles.productimage} source={require('../Image/X.png')}
                                />
                            </View>
                            <Text style={styles.detailtext}>
                                Name : xxxx
                            </Text>
                            <Text style={styles.detailtext}>
                                Price : xxxx Baht
                            </Text>
                            <Text style={styles.detailtext}>
                                QTY : xxxx
                            </Text>

                        </View>

                    </View>



                    <View style={styles.bigcontainer}>

                        <View elevation={5} style={styles.smallcontainer}>
                            <View style={styles.productcontainer}>
                                <Image
                                    resizeMode='cover' style={styles.productimage} source={require('../Image/X.png')}
                                />
                            </View>
                            <Text style={styles.detailtext}>
                                Name : xxxx
                            </Text>
                            <Text style={styles.detailtext}>
                                Price : xxxx Baht
                            </Text>
                            <Text style={styles.detailtext}>
                                QTY : xxxx
                            </Text>

                        </View>

                        <View elevation={5} style={styles.smallcontainer}>
                            <View style={styles.productcontainer}>
                                <Image
                                    resizeMode='cover' style={styles.productimage} source={require('../Image/X.png')}
                                />
                            </View>
                            <Text style={styles.detailtext}>
                                Name : xxxx
                            </Text>
                            <Text style={styles.detailtext}>
                                Price : xxxx Baht
                            </Text>
                            <Text style={styles.detailtext}>
                                QTY : xxxx
                            </Text>

                        </View>

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
        height: 230,
        backgroundColor: '#fff',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    smallcontainer: {
        height: 200,
        width: 150,
        backgroundColor: '#fff',
        marginVertical: 15,
    },
    productcontainer: {
        height: 120,
        backgroundColor: 'black',
    },
    productimage: {
        width: undefined,
        height: 120,
    },
    detailtext: {
        paddingHorizontal: 10,
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
    }
});