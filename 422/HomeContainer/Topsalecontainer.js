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


export default class Catagorycontainer extends React.Component {

    constructor(props) {
        super(props)
    }

    renderItem(item) {
        return (
            <View elevation={5} style={styles.smallcontainer}>
                <Image source={require('../Image/X.png')} style={styles.imageproduct} />
                <View style={styles.description}>
                    <Text>title</Text>
                    <View style={styles.priceandqty}>
                        <Text style={styles.pricetext}>฿ : 16</Text>
                        <Text style={styles.qtytext}>QTY : 5</Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View>
                <FlatList
                    horizontal={true}
                    data={[1, 2,]}  // data = [1,2]  <-- array
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </View>
        );
    }
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
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    pricetext: {
        color: '#51C400',
        fontWeight: 'bold',
        fontSize: 20,
        
    },
    qtyText: {
        color: '#717983',
        fontSize:10,
      },
});
