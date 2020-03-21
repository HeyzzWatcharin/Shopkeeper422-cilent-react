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


export default class Noodlecontainer extends React.Component {

    state = {
        data: []
    }

    facthData = async () => {
        const response = await fetch('http://192.168.88.118:8080/product/noodle') //change http// yourIP:8080/product
        const products = await response.json();
        this.setState({ data: products });
    }
    componentDidMount() {
        this.facthData();
    }

    constructor(props) {
        super(props)
    }


    renderItem(item) {
        return (
            <View elevation={5} style={styles.smallcontainer}>
                <Image source={require('../Image/coke.png')} style={styles.imageproduct} />
                <View style={styles.description}>
                    <Text>{item.ProductName}</Text>
                    <View style={styles.priceandqty}>
                        <Text style={styles.pricetext}>฿ : {item.Price}</Text>
                        <Text style={styles.qtytext}>QTY : {item.ProductQuantity}</Text>
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
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </View>
        );
    }
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
