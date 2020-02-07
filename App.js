import React from 'react';
import SearchBar from './SearchBar'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.topnav}>
        <View style={styles.topnavbox}>
          <Ionicons name="ios-list" size={32} color="white" />
        </View>
        <View style={styles.topnavbox}><SearchBar /></View>
      </View>
      <ScrollView>
        <View style={styles.contentcontainer}>
          <View>
            <Text style={{ color: 'red', fontSize: 30, textAlign: 'center', marginTop: 10, }}>
              <Ionicons name="md-star" size={32} color="red" />
              TOP SALES
              </Text>
          </View>
          <View style={styles.cardcontainer}>
            <View style={styles.card}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>
            <View style={styles.card}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>
            <View style={styles.card}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>
            <View style={styles.card}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>

          </View>
          <View>
            <Text style={{ color: '#ff3c00', fontSize: 30, textAlign: 'center', marginTop: 10, }}>PROMOTION</Text>
          </View>
          <View style={styles.cardcontainer}>
            <View style={styles.card}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>
            <View style={styles.card}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>
            <View style={styles.card}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>
            <View style={styles.card}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>
            <View style={styles.card}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>
            <View style={styles.card}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View elevation={10} style={styles.buttomnav}>
        <View style={styles.buttomnavbox}><Ionicons name="ios-home" size={32} color="#0e4c92" /></View>
        <View style={styles.buttomnavbox}><Ionicons name="ios-cart" size={32} color="#0e4c92" /></View>
        <View style={styles.buttomnavbox}><MaterialCommunityIcons name="file-powerpoint-box" size={32} color="#0e4c92" /></View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topnav: {
    backgroundColor: '#0e4c92',
    width: 393,
    height: 70,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  buttomnav: {
    backgroundColor: '#fff',
    width: 393,
    height: 60,
    borderColor: '#f6f6f6',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  topnavbox: {
    flex: 0.45,
    alignItems: 'flex-start',
  },
  buttomnavbox: {
    flex: 0.45,
    alignItems: 'center',
  },
  contentcontainer: {
    flex: 1,
    marginBottom: 20
  },
  cardcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#f6f6f6',
    borderColor: '#f6f6f6',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 2,
    width: 150,
    height: 200,
    marginTop: 20,

  },
});
