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
  FlatList
} from 'react-native';

export default class Catagorycontainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem(item) {
    return (
      <View elevation={5} style={styles.smallcontainer}>
        <Image source={{}} style={styles.imageproduct} />
        <View style={styles.description}>
          <Text>Sprite</Text>
          {/* Top-Sale Container */}
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <View style={styles.priceZone}>
              <Text style={styles.priceText}>฿</Text>
              <Text> </Text>
              <Text style={styles.priceText}>16</Text>
            </View>
            <View style={styles.qtyZone}>
              <Text style={styles.lightText}>QTY</Text>
              <Text> </Text>
              <Text style={styles.lightText}>5</Text>
            </View>
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
          data={[1, 2]} // data = [1,2]  <-- array
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  smallcontainer: {
    backgroundColor: '#fff',
    height: 225,
    marginHorizontal: 55,
    marginVertical: 20
  },

  imageproduct: {
    width: 175,
    height: 150
  },
  description: {
    paddingHorizontal: 10
  },
  priceZone: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRightWidth: 1,
    borderRightColor: '#F4F5F6'
  },
  qtyZone: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  lightText: {
    color: '#717983'
  },
  priceText: { color: '#51C400', fontWeight: 'bold', fontSize: 24, padding: 5 }
});
