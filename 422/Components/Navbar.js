import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    Button,
} from 'react-native'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            content: false,
        }
    }

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    HideAndShow = () => {
        this.setState(previousState => ({ content: !previousState.content }))
    }


    render() {
        const { search } = this.state;
        return (
            <View>
                <View style={styles.containerNavbar}>
                    <Icon name="list" size={25} color="#fff" />
                    <Icon name={this.props.icon} size={25} color="#fff" />
                    <Icon name="search" size={25} color="#fff" onPress={this.HideAndShow} />
                </View>
                {this.state.content ?
                    <SearchBar
                        placeholder="Search here"
                        onChangeText={this.updateSearch}
                        value={search}
                        platform="android"
                    />
                    : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerNavbar: {
        backgroundColor: '#80D444',
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'space-between',
        paddingTop: 25
    },
})