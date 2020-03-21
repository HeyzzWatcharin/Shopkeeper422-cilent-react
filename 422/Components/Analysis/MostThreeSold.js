import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class MostThreeSold extends React.Component {
  render() {
    const chart_wh = 250;
    const series = [60, 30, 10];
    const sliceColor = ['#52C500', '#96DD64', '#D2EFBD'];
    return (
      <View>
        <Text style={styles.title}>
          <Image source={require('../../Image/ic_show_chart_24px.png')}></Image>
          MOSTEST 3 PRODUCT SOLD
        </Text>
        <View style={styles.PieCh}>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    textTransform: 'uppercase',
    fontSize: 20
  },
  PieCh: { flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }
});
