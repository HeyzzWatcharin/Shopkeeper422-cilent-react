import React, { Component } from "react";
import { View, Text, FlatList, Button, StyleSheet, Image, ScrollView, } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";


class Searchpage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      temp: [],
      error: null,
      search: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setResult(json);
    } catch (e) {
      this.setState({ error: 'Error Loading content', loading: false });
    }
  };

  setResult = (res) => {
    this.setState({
      data: [...this.state.data, ...res],
      temp: [...this.state.temp, ...res],
      error: res.error || null,
      loading: false
    });
  }

  renderHeader = () => {
    return (
      <SearchBar placeholder="Search Here..."
        lightTheme round editable={true}
        value={this.state.search}
        onChangeText={this.updateSearch} />
    );
  };

  renderItem(item) {
    return (

      <View style={styles.maincontainer}>
        <View elevation={5} style={styles.smallcontainer}>
          <Image source={require('../Image/X.png')} style={styles.imageproduct} />
          <View style={styles.description}>
            <Text style={styles.texttitle}>title</Text>
            <View style={styles.priceandqty}>
              <Text style={styles.pricetext}>{`${item.id}`}</Text>
              <Text style={styles.qtytext}>{`${item.username}`}</Text>
            </View>
          </View>
        </View>
      </View>

    );
  }

  updateSearch = search => {
    this.setState({ search }, () => {
      if ('' == search) {
        this.setState({
          data: [...this.state.temp]
        });
        return;
      }

      this.state.data = this.state.temp.filter(function (item) {
        return item.username.includes(search);
      }).map(function ({ id, username }) {
        return { id, username };
      });
    });
  };

  render() {
    return (
      this.state.error != null ?
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text>{this.state.error}</Text>
          <Button onPress={
            () => {
              this.getData();
            }
          } title="Reload" />
        </View> :
        <FlatList
          ListHeaderComponent={this.renderHeader}
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderItem(item)}
        />
    );
  }
}

export default Searchpage;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  smallcontainer: {
    backgroundColor: '#fff',
    width: '60%',
    height: 350,
    marginVertical: 30,
  },

  imageproduct: {
    width: '100%',
    height: '70%',
  },
  description: {
    borderTopWidth: 1,
    borderColor: '#BEC5C9',
    height: '30%',
    paddingHorizontal: 10,
    paddingVertical:10,
  },
  priceandqty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  texttitle: {
    fontSize:20,
  },
  pricetext: {
    color: '#51C400',
    fontWeight: 'bold',
    fontSize:35,

  },
  qtyText: {
    color: '#717983',
    fontSize:20,
  },
});


