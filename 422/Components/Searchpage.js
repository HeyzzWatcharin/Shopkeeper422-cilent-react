import React, { Component } from "react";
import { View, Text, FlatList, Button } from "react-native";
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
 
   getData = async ()  => {
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
      return <SearchBar placeholder="Search Here..."
          lightTheme round editable={true}
          value={this.state.search}
          onChangeText={this.updateSearch} />; 
  }; 
 
  updateSearch = search => {
        this.setState({ search }, () => {
            if ('' == search) {
                this.setState({
                    data: [...this.state.temp]
                });
                return;
            }
             
            this.state.data = this.state.temp.filter(function(item){
                return item.name.includes(search);
              }).map(function({id, name, email}){
                return {id, name, email};
            });
        });
  };
 
  render() {
    return (
      this.state.error != null ?
        <View style={{ flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}>
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
            keyExtractor={item => item.email}
            renderItem={({ item }) => (
            <ListItem
                roundAvatar
                title={`${item.name}`}
                subtitle={item.email}
            />
        )}
      />
    );
  }
}
 
export default Searchpage;