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
import { Table, Row, Rows } from 'react-native-table-component';

export default class ProductManage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <HeadZone />
          <TopSalesZone />
          <CategoriesZone />
          <ProductZone />
          <ProductAddEdit />
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
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'Category', 'Prices(฿)', 'Qty', 'Edit'],
      tableData: [
        [
          'Sprice',
          'Drinks',
          '12',
          '22',
          <Image
            style={styles.icEdit2}
            source={require('../Image/ic_keyboard_arrow_right_24px.png')}
          ></Image>
        ],
        [
          'Lays',
          'Candy',
          '20',
          '10',
          <Image
            style={styles.icEdit2}
            source={require('../Image/ic_keyboard_arrow_right_24px.png')}
          ></Image>
        ]
      ]
    };
  }
  render() {
    const state = this.state;
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#E6E6E6',
          paddingVertical: 30
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.titleManage}>Products</Text>
          <Image
            style={{
              width: 25,
              height: 25,
              marginLeft: 20
            }}
            source={require('../Image/ic_add_box_24px.png')}
          ></Image>
        </View>
        <View style={styles.container}>
          <Table>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.headTableText}
            />
            <Rows data={state.tableData} textStyle={styles.text} />
          </Table>
        </View>
      </View>
    );
  }
}

class ProductAddEdit extends React.Component {
  render() {
    return (
      <View
        style={{
          paddingVertical: 30
        }}
      >
        <View>
          <Image
            style={{ width: 26, height: 26, marginTop: 35, marginLeft: 15 }}
            source={require('../Image/back-left-arrow-botton.png')}
          ></Image>

          <Text style={styles.titleManage2}>PRODUCT EDITING</Text>
        </View>
        <View stlye={{ flexDirection: 'row' }}>
          <Image
            style={{
              height: 250,
              width: 250,
              backgroundColor: '#F6F6F6',
              margin: 10,
              alignSelf: 'center'
            }}
          ></Image>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 12
          }}
        >
          <Text style={{ textDecorationLine: 'underline' }}>Upload image</Text>
        </View>
        <View>
          <View
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'row'
            }}
          >
            <View>
              <Text>PRODUCT NAME</Text>
            </View>
            <View style={{ marginLeft: 20, flex: 1 }}>
              <Text style={{ color: '#717983' }}>sprice</Text>
            </View>
            <Image
              style={{ marginLeft: 'auto' }}
              source={require('../Image/ic_keyboard_arrow_right_24px.png')}
            ></Image>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'row'
            }}
          >
            <View>
              <Text>CATEGORY</Text>
            </View>
            <View style={{ marginLeft: 20, flex: 1 }}>
              <Text style={{ color: '#717983' }}>drinks</Text>
            </View>
            <Image
              style={{ marginLeft: 'auto' }}
              source={require('../Image/ic_keyboard_arrow_right_24px.png')}
            ></Image>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'row'
            }}
          >
            <View>
              <Text>PRICES</Text>
            </View>
            <View style={{ marginLeft: 20, flex: 1 }}>
              <Text style={{ color: '#717983' }}>xxx</Text>
            </View>
            <Image
              style={{ marginLeft: 'auto' }}
              source={require('../Image/ic_keyboard_arrow_right_24px.png')}
            ></Image>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'row'
            }}
          >
            <View>
              <Text>QUANTITIES</Text>
            </View>
            <View style={{ marginLeft: 20, flex: 1 }}>
              <Text style={{ color: '#717983' }}>22</Text>
            </View>
            <Image
              style={{ marginLeft: 'auto' }}
              source={require('../Image/ic_keyboard_arrow_right_24px.png')}
            ></Image>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'row',
              backgroundColor: '#E9E9E9'
            }}
          >
            <View>
              <Text>DESCRIPTION</Text>
            </View>
            <View style={{ marginLeft: 20, flex: 1 }}>
              <Text style={{ color: '#717983' }}>
                There are many variations of passages of Lorem
              </Text>
            </View>
            <Image
              style={{ marginLeft: 'auto' }}
              source={require('../Image/ic_keyboard_arrow_right_24px.png')}
            ></Image>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 10
            }}
          >
            <View
              style={{
                backgroundColor: '#67DA16',
                paddingVertical: 5,
                paddingHorizontal: 10,
                marginHorizontal: 10,
                marginVertical: 20
              }}
            >
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  color: '#FFF',
                  fontSize: 18
                }}
              >
                Submit
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#CFCFCF',
                paddingVertical: 5,
                paddingHorizontal: 10,
                marginHorizontal: 10,
                marginVertical: 20
              }}
            >
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  color: '#FFF',
                  fontSize: 16
                }}
              >
                Cancel
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icEdit: {
    width: 23,
    height: 23,
    marginLeft: 20
  },
  icEdit2: { alignSelf: 'center' },
  titleManage: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingLeft: 20
  },
  titleManage2: {
    color: '#359100',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 20
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#E3F5D7' },
  headTableText: {
    margin: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    paddingVertical: 10,
    margin: 6,
    fontSize: 12,
    justifyContent: 'center',
    alignSelf: 'center',
    textTransform: 'lowercase'
  }
});
