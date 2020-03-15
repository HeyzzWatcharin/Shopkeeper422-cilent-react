import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class RankedSold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['No.', 'Name', 'Sold Out'],
      tableData: [
        ['1', 'Sprite', 'x 120'],
        ['2', 'SpriteY', 'x 98'],
        ['3', 'SpriteZ', 'x 62'],
        ['..', '...', '..'],
        ['20', 'SpriteZX', 'x 12']
      ]
    };
  }
  render() {
    const state = this.state;
    return (
      <View>
        <Text style={styles.title}>
          <Image source={require('../../Image/ic_show_chart_24px.png')}></Image>
          Ranked Product Sold
        </Text>
        <Text style={styles.updateTime}>
          <Image source={require('../../Image/ic_stop_24px.png')}></Image> 23
          JAN 2020
        </Text>

        <View style={styles.Tablecontainer}>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title: {
    marginTop: 20,
    textTransform: 'uppercase',
    fontSize: 20
  },
  PieCh: {
    margin: 20,
    alignSelf: 'center'
  },
  header: {
    color: '#62973C',
    marginTop: 50,
    fontSize: 24,
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  updateTime: {
    marginLeft: 'auto',
    color: '#FF5E00'
  },
  Tablecontainer: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  headTableText: {
    margin: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
