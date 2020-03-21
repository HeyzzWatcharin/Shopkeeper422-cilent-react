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
    FlatList,
} from 'react-native';

const numColumns = 2;
export default function Catagorycontainer({navigation}) {
    return (
        <View>
            <FlatList
                data={[1, 2, 3, 4]}  // data = [1,2]  <-- array 
                numColumns={numColumns}
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
        </View>
    );
}

const styles = StyleSheet.create({
    smallcontainer: {
        backgroundColor: '#fff',
        width: 175,
        height: 225,
        marginHorizontal: 25,
        marginVertical: 20,
    },

    imageproduct: {
        width: 175,
        height: 150,
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
