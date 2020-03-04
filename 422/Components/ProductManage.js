import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

export default class ProductManage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <HeadZone />
          <TopSalesZone />
          <CategoriesZone />
          <ProductZone />
        </ScrollView>
      </View>
    );
  }
}

class HeadZone extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            color: '#62973C',
            fontWeight: 'bold',
            fontSize: 26,
            textTransform: 'uppercase',
            alignSelf: 'center',
            marginTop: 20,
            justifyContent: 'center'
          }}
        >
          Product Management
        </Text>
      </View>
    );
  }
}

class TopSalesZone extends React.Component {
  render() {
    return (
      <View style={{ paddingVertical: 30 }}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#E6E6E6',
            marginRight: 20
          }}
        >
          <Text
            style={
              ({
                paddingLeft: 20
              },
              styles.titleManage)
            }
          >
            Top sales
          </Text>
          <View style={{ flexDirection: 'row', marginVertical: 20 }}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 20,
                alignSelf: 'center'
              }}
            >
              Show
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#359100',
                paddingLeft: 20
              }}
            >
              4
            </Text>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 20
              }}
            >
              Items
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 'auto'
              }}
            >
              <Image
                style={{
                  width: 32,
                  height: 32,
                  marginRight: 5
                }}
                source={require('../Image/ic_remove_24px.png')}
              ></Image>
              <Image
                style={{
                  width: 32,
                  height: 32,
                  marginLeft: 5
                }}
                source={require('../Image/ic_add_24px.png')}
              ></Image>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginLeft: 'auto',
              marginBottom: 30
            }}
          >
            <Text
              style={{
                backgroundColor: '#CFCFCF',
                fontWeight: 'bold',
                color: '#FFF',
                paddingHorizontal: 8,
                paddingVertical: 5,
                textTransform: 'uppercase',
                fontSize: 18,
                marginRight: 10
              }}
            >
              Cancel
            </Text>
            <Text
              style={{
                backgroundColor: '#FF0000',
                fontWeight: 'bold',
                color: '#FFF',
                paddingHorizontal: 12,
                paddingVertical: 5,
                textTransform: 'uppercase',
                fontSize: 18
              }}
            >
              Save
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

class CategoriesZone extends React.Component {
  render() {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#E6E6E6',
          paddingBottom: 30
        }}
      >
        <View style={{ flexDirection: 'row', marginBottom: 18 }}>
          <Text
            style={
              ({
                paddingLeft: 20
              },
              styles.titleManage)
            }
          >
            Categories
          </Text>
          <Image
            style={{
              width: 25,
              height: 25,
              marginLeft: 20
            }}
            source={require('../Image/ic_add_box_24px.png')}
          ></Image>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, color: '#5DB71D' }}>Drinks</Text>
            <Image
              style={styles.icEdit}
              source={require('../Image/ic_create_24px.png')}
            ></Image>
          </View>
        </View>
      </View>
    );
  }
}
class ProductZone extends React.Component {
  render() {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#E6E6E6',
          paddingVertical: 30
        }}
      >
        <Text style={styles.titleManage}>Products</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 30
  },
  icEdit: {
    width: 25,
    height: 25,
    marginLeft: 20
  },
  titleManage: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingLeft: 20
  }
});
