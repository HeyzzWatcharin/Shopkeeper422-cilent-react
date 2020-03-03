import * as React from 'react';
import { SearchBar } from 'react-native-elements';

export default class search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search here"
        onChangeText={this.updateSearch}
        value={search}
        platform="android"
        
      />
    );
  }
}

