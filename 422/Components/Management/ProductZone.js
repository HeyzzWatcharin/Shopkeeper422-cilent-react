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
import { Table, Row, Rows } from 'react-native-table-component';

export default class ProductZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'Category', 'Prices(฿)', 'Qty', 'Edit'],
      tableData: [
        [
          'Sprice',
          'Drinks',
          '12',
          '22',
          <Image
            style={styles.icEdit2}
            source={require('../../Image/ic_keyboard_arrow_right_24px.png')}
          ></Image>
        ],
        [
          'Lays',
          'Candy',
          '20',
          '10',
          <Image
            style={styles.icEdit2}
            source={require('../../Image/ic_keyboard_arrow_right_24px.png')}
          ></Image>
        ]
      ]
    };
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.ProductContain}>
        <View style={styles.flexRow}>
          <Text style={styles.titleManage}>Products</Text>
          <Image
            style={styles.AddBtn}
            source={require('../../Image/ic_add_box_24px.png')}
          ></Image>
        </View>
        <View style={styles.container}>
          <Table>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.headTableText}
            />
            <Rows data={state.tableData} textStyle={styles.text} />
          </Table>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ProductContain: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    paddingVertical: 30
  },
  flexRow: {
    flexDirection: 'row'
  },
  icEdit: {
    width: 23,
    height: 23,
    marginLeft: 20
  },
  icEdit2: { alignSelf: 'center' },
  titleManage: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingLeft: 20
  },
  titleManage2: {
    color: '#359100',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 20
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#E3F5D7' },
  headTableText: {
    margin: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    paddingVertical: 10,
    margin: 6,
    fontSize: 12,
    justifyContent: 'center',
    alignSelf: 'center',
    textTransform: 'lowercase'
  },
  AddBtn: {
    width: 25,
    height: 25,
    marginLeft: 20
  }
});
