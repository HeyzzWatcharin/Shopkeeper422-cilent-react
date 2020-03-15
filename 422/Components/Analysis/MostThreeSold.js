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
          <Image
            style={{}}
            source={require('../../Image/ic_show_chart_24px.png')}
          ></Image>
          MOSTEST 3 PRODUCT SOLD
        </Text>
        <PieChart
          style={styles.PieCh}
          chart_wh={chart_wh}
          series={series}
          sliceColor={sliceColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    textTransform: 'uppercase',
    fontSize: 20
  }
});