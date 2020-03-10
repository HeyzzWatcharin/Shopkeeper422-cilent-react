import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

export default class Categoriesdbs extends React.Component {
  constructor(props) {
    super(props);
  }
  renderItem(item) {
    return (
      <View>
        <View style={styles.FlexRow}>
          <Text style={styles.cateTitle}>Drinks</Text>
          <Image
            style={styles.icEdit}
            source={require('../../Image/ic_create_24px.png')}
          ></Image>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          horizontal={false}
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cateContain: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    paddingBottom: 30
  },
  titleManage: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingLeft: 20
  },
  AddIcon: {
    width: 25,
    height: 25,
    marginLeft: 20
  },
  icEdit: { width: 23, height: 23, marginLeft: 20 },
  cateTitle: {
    fontSize: 20,
    color: '#5DB71D'
  },
  FlexRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  FlexRowMargin18: {
    flexDirection: 'row',
    marginBottom: 18
  },
  paddingLR: {
    paddingHorizontal: 20
  }
});
