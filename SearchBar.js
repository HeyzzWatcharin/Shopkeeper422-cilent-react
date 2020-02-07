import React from 'react';
import { SearchBar, colors } from 'react-native-elements';

export default class App extends React.Component {
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
                placeholder=""
                onChangeText={this.updateSearch}
                value={search}
                platform='ios'
                containerStyle={{
                    flex: 0.4,
                    backgroundColor: '#0e4c92',
                }}
                inputContainerStyle={{
                    height: 30,
                    
                }}
                icon={{ type: 'MaterialCommunityIcons', color: '#86939e', name: 'share' }}
                clearIcon={{ type: 'MaterialCommunityIcons', color: '#86939e', name: 'share' }}
                round={true}
            />
        );
    }
}