import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HeadZone from './Management/Headzone';
import TopSalesZone from './Management/TopSalesZone';
import CategoriesZone from './Management/CategoriesZone';
import ProductAddEdit from './Management/ProductAddEdit';
import ProductZone from './Management/ProductZone';
import Navbar from './Navbar'

export default class ProductManage extends React.Component {
  render() {
    return (
      <View style={styles.maincontainer}>
        <Navbar />
        <View style={styles.container}>
          <ScrollView>
            <HeadZone />
            <TopSalesZone />
            <CategoriesZone />
            <ProductZone />
            <ProductAddEdit />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
