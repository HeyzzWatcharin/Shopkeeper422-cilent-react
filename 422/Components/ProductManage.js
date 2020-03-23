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

export default function ProductManage({navigation})  {
    return (
      
        <View style={styles.container}>
          <ScrollView>
            <HeadZone />
            <TopSalesZone />
            <CategoriesZone />
            <ProductZone navigation={navigation}/>
            {/* <ProductAddEdit /> */}
          </ScrollView>
        </View>
      
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  
});
