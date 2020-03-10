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

import Categoriesdbs from './Categoriesdbs';

export default class CategoriesZone extends React.Component {
  render() {
    return (
      <View style={styles.cateContain}>
        <View style={styles.FlexRowMargin18}>
          <Text style={styles.titleManage}>Categories</Text>
          <Image
            style={styles.AddIcon}
            source={require('../../Image/ic_add_box_24px.png')}
          ></Image>
        </View>

        <View style={styles.paddingLR}>
          <Categoriesdbs />
        </View>
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
    flexDirection: 'row'
  },
  FlexRowMargin18: {
    flexDirection: 'row',
    marginBottom: 18
  },
  paddingLR: {
    paddingHorizontal: 20
  }
});
