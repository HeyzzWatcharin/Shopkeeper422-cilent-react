import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Button,
} from 'react-native';

export default function Catagorycontainer({ navigation }) {


    return (
        <FlatList
            horizontal={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) =>
                <View elevation={5} style={styles.smallcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Detail')}  >
                        <Image source={require('../Image/X.png')} style={styles.imageproduct} />
                        <View style={styles.description}>
                            <Text>title</Text>
                            <View style={styles.priceandqty}>
                                <Text style={styles.pricetext}>฿ : 16</Text>
                                <Text style={styles.qtytext}>QTY : 5</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            }
        />
    );
}


const styles = StyleSheet.create({
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