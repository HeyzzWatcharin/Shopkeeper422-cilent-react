import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class HeadZone extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.manageHeader}>Product Management</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  manageHeader: {
    color: '#62973C',
    fontWeight: 'bold',
    fontSize: 26,
    textTransform: 'uppercase',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center'
  }
});
