import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MostThreeSold from './Analysis/MostThreeSold';
import RankedSold from './Analysis/RankSold';

export default class ProductAnalysis extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>Product Analysis</Text>
          <MostThreeSold />
          <RankedSold />
        </ScrollView>
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
  header: {
    color: '#62973C',
    marginTop: 50,
    fontSize: 24,
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});