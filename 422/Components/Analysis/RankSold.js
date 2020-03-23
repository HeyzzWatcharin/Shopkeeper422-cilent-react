import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class RankedSold extends React.Component {
  state = {
    tableHead: ['No.', 'Name', 'Sold Out'],
    rankdata: []
  }
  facthData = async () => {
    const response = await fetch('http://192.168.0.105:8080/order/ranking') //change http// yourIP:8080/product
    const ranking = await response.json();
    this.setState({ rankdata: ranking });
  }
  componentDidMount() {
    this.facthData();
  }
  constructor(props) {
    super(props);
  }
  renderItem(item) {
    return (
      <View>
          <Text textStyle={styles.text}>{item.Rank} {item.ProductName} {item.Qty} </Text>
      </View>
    );
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
            <FlatList
                    data={this.state.rankdata}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => this.renderItem(item)}
                />
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
    justifyContent: 'space-between',
    alignSelf: 'center'
  }
});
