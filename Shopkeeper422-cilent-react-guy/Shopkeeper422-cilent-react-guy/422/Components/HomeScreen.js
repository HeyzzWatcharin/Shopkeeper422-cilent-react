import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Slider from './Slider';
import Categorycontainer from '../HomeContainer/Categorycontainer';
import Topsalecontainer from '../HomeContainer/Topsalecontainer';
import Navbar from './Navbar';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.maincontainer}>
        <Navbar />
        {/* ---------------------------------------------------------------------------- */}
        <ScrollView>
          <View style={styles.pscontainer}>
            <Text style={styles.promoTitle}>Promotion</Text>
          </View>
          <Slider />
          {/* ------------------------------------------------------------------------ */}
          <View style={styles.pscontainer}>
            <Text style={styles.promoTitle}>TOP SALE</Text>
          </View>
          <View style={styles.topsalecontainer}>
            <Topsalecontainer />
            <Topsalecontainer />
          </View>

          {/* ------------------------------------------------------------------------ */}

          <View style={styles.categorycontainer}>
            <View style={styles.titlebigcontainer}>
              <Text style={styles.titletext}>Drink</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
              <Categorycontainer />
            </ScrollView>
          </View>

          <View style={styles.categorycontainer}>
            <View style={styles.titlebigcontainer}>
              <Text style={styles.titletext}>Drink</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
              <Categorycontainer />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },
  toptoolbar: {
    height: 70,
    marginTop: 30,
    backgroundColor: '#80D444',
    flexDirection: 'row',
    alignItems: 'center'
  },

  boxtoptoolbar: {
    marginHorizontal: 20,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  categorycontainer: {
    height: 275,
    backgroundColor: '#fff',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  topsalecontainer: {
    height: 550,
    backgroundColor: '#fff'
  },
  titlebigcontainer: {
    height: 50,
    position: 'absolute'
  },
  pscontainer: {
    height: 60,
    backgroundColor: '#0C5800',
    marginTop: 20,
    alignItems: 'center'
  },
  promoTitle: {
    textTransform: 'uppercase',
    color: '#fff',
    alignItems: 'center',
    padding: 15,
    fontSize: 18
  },
  titletext: {
    paddingTop: 10,
    paddingLeft: 20,
    fontSize: 20,
    color: '#80D444'
  }
});